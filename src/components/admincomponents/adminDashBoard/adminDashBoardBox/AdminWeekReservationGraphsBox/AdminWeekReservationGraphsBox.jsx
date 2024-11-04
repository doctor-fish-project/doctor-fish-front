import React, { useState } from 'react';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../../../apis/utils/instance';
import AdminWeekReservationChartBar from '../../AdminWeekReservationChartBar/AdminWeekReservationChartBar';

function AdminWeekReservationGraphsBox(props) {

    const [options, setOptions] = useState([]);

    const [year, setYear] = useState()
    
    const weekReservationByYears = useQuery(
        ["weekReservationByYearsQuery"],
        async () => await adminInstance.get("/admin/reservation/year"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response?.data)
                const timeOptions = response?.data?.map(year => ({
                    value: year.id,
                    label: year.year
                }))
                setOptions(timeOptions)
                setYear(timeOptions[0]);
            }
        }
    )

    return (
        <AdminDashBoardLayout>
            {
                weekReservationByYears.isLoading ? <></> :
                    <>
                        <AdminDashBoardTitle title={"예약 주간 통계"} options={options} year={year} setYear={setYear} />
                        <AdminWeekReservationChartBar year={year} />
                    </>
            }
        </AdminDashBoardLayout>
    );
}

export default AdminWeekReservationGraphsBox;