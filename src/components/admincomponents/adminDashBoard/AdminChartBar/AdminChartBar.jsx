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

export default function AdminChartBar(props) {

    const year = "2024"

    const graphs = useQuery(
        ["graphsQuery"],
        async () => await adminInstance.get(`/reservation/list/month/${year}`),
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

    const labels = graphs?.data?.data?.months?.map(i => i.month)

    const data = {
        labels,
        datasets: graphs.isSuccess ? graphs?.data?.data?.getReservationMonths?.map((reserve, idx) => ({
            ...reserve,
            backgroundColor: COLORS[idx]
        })) : []
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
                <Bar options={options} data={data} />
            </div>
        </div>
    );
}