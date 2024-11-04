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

export default function AdminWeekReservationChartBar({ year }) {

    const weekReservations = useQuery(
        ["weekReservationsQuery", year],
        async () => await adminInstance.get(`/admin/reservation/dashboard/week/count?year=${year.label}`),
        {
            enabled: !!year,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )
    console.log(weekReservations)
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
                position: 'top',
            },
        },
    };

    const data = {
        labels: weekReservations?.data?.data?.weeks?.map(i => i.day),
        datasets: (weekReservations.isSuccess && weekReservations?.data?.data) ? weekReservations?.data?.data?.reservations?.map((reservation, idx) => {
            return { data: reservation.counts?.map(count => count.count), backgroundColor: COLORS[idx] }
        }) : []
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
                {weekReservations.isSuccess && weekReservations.data ? (
                    <Bar options={options} data={data} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}