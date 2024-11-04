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

export default function AdminWeekReservationChartBar(props) {

    const weekReservations = useQuery(
        ["weekReservationsQuery"],
        async () => await adminInstance.get('/admin/reservation/dashboard/week/count'),
        {
            enabled: true,
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
                },
                Text: "요일"
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
        },
    };

    const data = {
        labels: weekReservations?.data?.data?.weeks?.map(i => i.day),
        datasets: (weekReservations.isSuccess && weekReservations?.data?.data) ?
        [{ 
    
            data: weekReservations?.data?.data?.reservations?.map(reservation => reservation.count),
            backgroundColor: weekReservations?.data?.data?.reservations?.map((reservation, idx) => COLORS[idx])
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
                {weekReservations?.isSuccess && weekReservations?.data?.data ? (
                    <Bar options={options} data={data} />
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}