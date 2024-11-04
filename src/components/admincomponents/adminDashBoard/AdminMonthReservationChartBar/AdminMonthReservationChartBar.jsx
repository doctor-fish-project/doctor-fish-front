import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../../apis/utils/instance';
import { COLORS } from '../../../../constants/admin/colors';

//기본 Bar 차트
//https://react-chartjs-2.js.org/components/bar

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function AdminMonthReservationChartBar({ year }) {

    const monthReservations = useQuery(
        ["monthReservationsQuery", year],
        async () => await adminInstance.get(`/admin/reservation/dashboard/month/count?year=${year.label}`)
        ,
        {
            enabled: !!year,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                beginAtZero: true,
                ticks: {
                    autoSkip: true,
                    stepSize: 4,
                }
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top'
            },
        },
    };

    const data = {
        labels: monthReservations?.data?.data?.months?.map(i => i.month),
        datasets: (monthReservations.isSuccess && monthReservations?.data?.data) ?
            [{
                data: monthReservations?.data?.data?.reservations?.map(reservation => reservation.count),
                backgroundColor: monthReservations?.data?.data?.reservations?.map((reservation, idx) => COLORS[idx])
            }]
            : []
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
        }}>
            <div style={{
                width: "90%",
                height: "90%"
            }}>
                {monthReservations.isSuccess && monthReservations.data ? (
                    <Bar options={options} data={data} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}