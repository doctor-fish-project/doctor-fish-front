import React, { useState } from 'react';
import AdminDashBoardLayout from '../../AdminDashBoardLayout/AdminDashBoardLayout';
import AdminDashBoardTitle from '../../AdminDashBoardTitle/AdminDashBoardTitle';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../../../apis/utils/instance';
import AdminMonthAndDoctorReservationChartBar from '../../AdminMonthAndDoctorReservationChartBar/AdminMonthAndDoctorReservationChartBar';

function AdminMonthAndDoctorReservationGraphsBox(props) {

    const [options, setOptions] = useState([]);

    const [year, setYear] = useState(null)

    const years = useQuery(
        ["yearsQuery"],
        async () => await adminInstance.get("/admin/reservation/year"),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const timeOptions = response?.data?.map(year => ({
                    value: year.id,
                    label: year.year
                }))
                setOptions(timeOptions);
                setYear(timeOptions[0]);
            }
        }
    )

    return (
        <AdminDashBoardLayout>
            {
                years.isLoading ? <></> :
                    <>
                        <AdminDashBoardTitle title={"의사 별 통계"} options={options} year={year} setYear={setYear}/>
                        <AdminMonthAndDoctorReservationChartBar year={year} />
                    </>
            }
        </AdminDashBoardLayout>
    );
}

export default AdminMonthAndDoctorReservationGraphsBox;