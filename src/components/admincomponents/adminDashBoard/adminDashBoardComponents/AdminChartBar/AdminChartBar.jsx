import React, { useEffect, useState } from 'react';
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

export default function AdminChartBar({ monthList, reservationMonths }) {
    const [ datas, setDatas ] = useState([]);
    const [ doctor, setDoctor ] = useState({
        label: "",
        data: [],
        backgroundColor: ""
    })

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
            // title: {
            //     display: true,
            //     text: '월 예약 횟수',
            // },
        },
    };

    const labels = monthList;

    const data = {
        labels,
        datasets: [
            {
                label: '1번의사',
                data: [1, 2, 3, 0, 5, 6, 7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '2번의사',
                data: [2, 3, 4, 5, 4, 7, 8],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
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