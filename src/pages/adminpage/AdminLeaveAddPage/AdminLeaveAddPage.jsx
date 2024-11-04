import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminContainer from '../../../components/admincomponents/AdminContainer/AdminContainer';
import ReactSelect from 'react-select';
import AdminPageLayout from '../../../components/admincomponents/AdminPageLayout/AdminPageLayout';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { adminInstance } from '../../../apis/utils/instance';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6';
import AdminPagination from '../../../components/admincomponents/AdminPagination/AdminPagination';
import AdminTableLayout from '../../../components/admincomponents/adminTable/AdminTableLayout/AdminTableLayout';
import AdminTableHeader from '../../../components/admincomponents/adminTable/AdminTableHeader/AdminTableHeader';

function AdminLeaveAddPage(props) {
    const nav = useNavigate();

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");

    const [timeOptions, setTimeOptions] = useState([]);
    const [leaveTimeIdx, setLeaveTimeIdx] = useState(0);
    const [totalPageCount, setTotalPageCount] = useState(1);
    const [leaveDate, setLeaveDate] = useState({
        date: "",
        leaveTime: "",
        endTime: ""
    })

    const [leaveInput, setLeaveInput] = useState({
        userId: 0,
        reason: "",
        leaveDate: "",
        endDate: ""
    })

    const limit = 14;

    useEffect(() => {
        if (!searchParams?.get("page")) {
            setSearchParams(searchParams => ({
                ...searchParams,
                page: 1
            }))
        }
    }, [searchParams])

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value
        const today = new Date()

        const year = today.getFullYear();
        const month = parse(today.getMonth() + 1);
        const day = parse(today.getDate());
        setLeaveDate({
            date: `${year}-${month}-${day}`
        })
    }, [])

    useEffect(() => {
        if (!!userInfo) {
            setLeaveInput(leaveInput => ({
                ...leaveInput,
                userId: userInfo?.data?.id
            }))
        }
    }, [userInfo])

    useEffect(() => {
        setLeaveInput(leaveInput => ({
            ...leaveInput,
            leaveDate: `${leaveDate.date}T${leaveDate.leaveTime}:00`,
            endDate: `${leaveDate.date}T${leaveDate.endTime}:00`,
        }))

    }, [leaveDate])

    const leaveTableHeaders = useQuery(
        ["leaveTableHeadersQuery"],
        async () => await adminInstance.get(`/admin/tableheader?pathName=${location.pathname}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    const times = useQuery(
        ["timesListQuery", leaveDate.date],
        async () => await adminInstance.get(`/times`, {
            params: {
                leaveDate: leaveDate.date
            }   
        }),
        {
            enabled: leaveDate.date !== "",
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                const timeOptions = response.data.map(time => ({
                    value: time.id,
                    label: time.time
                }))
                setTimeOptions(timeOptions)
            }

        }
    )

    const leaves = useQuery(
        ["leavesQuery", searchParams.get("page")],
        async () => await adminInstance.get(`/admin/leave/list?page=${searchParams.get("page")}&limit=${limit}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setTotalPageCount(
                    response?.data?.leaveCount % limit === 0
                        ? response?.data?.leaveCount / limit
                        : Math.floor(response?.data?.leaveCount / limit) + 1);
                
            }
        }
    )

    const leave = useMutation(
        async () => await adminInstance.post("/admin/leave", leaveInput),
        {
            onSuccess: response => {
                alert("연차 신청 완료");
                leaves.refetch();
            },
            onError: error => {
                alert("연차 등록 실패");
                leaves.refetch();
            }
        }
    )

    const handleResetLeaveOnClick = () => {
        window.location.reload();
    }

    const handleLeaveInputOnChange = (e) => {
        setLeaveInput(leaveInput => ({
            ...leaveInput,
            [e.target.name]: e.target.value
        }))
    }

    const handleDateOnChange = (e) => {
        setLeaveDate(leaveDate => ({
            ...leaveDate,
            [e.target.name]: e.target.value
        }))
    }

    const handleLeaveDateOnChange = (option) => {
        setLeaveDate(leaveDate => ({
            ...leaveDate,
            leaveTime: option.label
        }))
        setLeaveTimeIdx(option.value)
    }

    const handleEndDateOnChange = (option) => {
        setLeaveDate(leaveDate => ({
            ...leaveDate,
            endTime: option.label
        }))
    }

    const handlePageOnChange = (e) => {
        nav(`/admin/leave?page=${e.selected + 1}`);
    }

    return (
        <AdminContainer>
            <AdminPageLayout title={"연차 신청"}
                onCheckClick={() => leave.mutateAsync().catch(() => { })}
                onCancelClick={handleResetLeaveOnClick}>
                <div css={s.layout}>
                    <div css={s.topContainer}>
                        <div css={s.imgBox}>
                            <img src={userInfo?.data?.img} alt="" />
                        </div>
                        <div css={s.inputContainer}>
                            <div css={s.infoBox}>
                                <p>이름: {userInfo?.data?.name}</p>
                            </div>
                            <div css={s.inputBox}>
                                <p>연차 날짜: </p>
                                <input type="date" name="date" value={leaveDate.date} onChange={handleDateOnChange} />
                            </div>
                            <div css={s.inputBox}>
                                <p>연차 시간: </p>
                                <ReactSelect
                                    placeholder="시간을 선택하세요"
                                    onChange={handleLeaveDateOnChange}
                                    styles={{
                                        control: (style) => ({
                                            ...style,
                                            margin: "0",
                                            border: "none",
                                            padding: "0px 11px",
                                            width: "220px",
                                            outline: "none",
                                            boxShadow: "none",
                                            textAlign: "center",
                                            ":active": {
                                                border: "none",
                                            },
                                            ":focus": {
                                                border: "none",
                                                boxShadow: "none"
                                            }
                                        }),
                                        input: (style) => ({
                                            ...style,
                                            boxShadow: "none", // input에 box-shadow 제거
                                            caretColor: "transparent", // 커서 깜빡임 제거
                                        }),
                                        indicatorSeparator: () => null
                                    }}
                                    options={timeOptions}
                                    value={timeOptions.filter(option => option.label === leaveDate.leaveTime)[0]}
                                />
                                {
                                    !!leaveDate.leaveTime &&
                                    <>
                                        <FaAngleRight />
                                        <ReactSelect
                                            placeholder="시간을 선택하세요"
                                            onChange={handleEndDateOnChange}
                                            styles={{
                                                control: (style) => ({
                                                    ...style,
                                                    margin: "0",
                                                    padding: "0px 11px",
                                                    border: "none",
                                                    width: "220px",
                                                    outline: "none",
                                                    boxShadow: "none",
                                                    textAlign: "center",
                                                    ":active": {
                                                        border: "none",
                                                    },
                                                    ":focus": {
                                                        border: "none",
                                                        boxShadow: "none"
                                                    }
                                                }),
                                                input: (style) => ({
                                                    ...style,
                                                    boxShadow: "none", // input에 box-shadow 제거
                                                    caretColor: "transparent", // 커서 깜빡임 제거
                                                }),
                                                indicatorSeparator: () => null,
                                            }}
                                            options={timeOptions.slice(leaveTimeIdx)}
                                            value={leaveDate.value}
                                        />
                                    </>
                                }
                            </div>
                            <div css={s.textareaBox}>
                                <label htmlFor='reason'>연차 사유</label>
                                <textarea name="reason" id="reason" onChange={handleLeaveInputOnChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <AdminTableLayout>
                        <AdminTableHeader tableheaders={leaveTableHeaders?.data?.data} />
                            <tbody css={s.body(leaveTableHeaders?.data?.data?.length)}>
                                {
                                    leaves?.data?.data?.leaves?.map((leave, idx) =>
                                        <tr key={leave.id}>
                                            <td>{idx + 1}</td>
                                            <td>{leave?.registerDate.slice(0,16).replace("T", "-")}</td>
                                            <td>{leave?.leaveDate.slice(0,16).replace("T", "-")}</td>
                                            <td>{leave?.endDate.slice(0,16).replace("T", "-")}</td>
                                            <td>{leave?.reason}</td>
                                            <td>
                                                {
                                                    leave.status === 1 ? "진행 중"
                                                    : leave.status === 2 ? "완료" : "취소"
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </AdminTableLayout>
                    <AdminPagination searchParams={searchParams} count={totalPageCount} onChange={handlePageOnChange} />
                </div>
            </AdminPageLayout>
        </AdminContainer>
    );
}

export default AdminLeaveAddPage;