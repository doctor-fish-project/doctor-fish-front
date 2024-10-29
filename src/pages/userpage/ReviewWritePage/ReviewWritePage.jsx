import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { v4 as uuid } from 'uuid'
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import { useMutation, useQuery } from 'react-query';
import { instance } from '../../../apis/utils/instance';
import Swal from 'sweetalert2';
import ImgBox from '../../../components/usercomponents/reviewWritePage/ImgBox/ImgBox';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import UserSubLayout from '../../../components/usercomponents/UserSubLayout/UserSubLayout';
import UserSubContainer from '../../../components/usercomponents/UserSubContainer/UserSubContainer';
import ReservationRecord from '../../../components/usercomponents/reviewSelectPage/ReservationRecord/ReservationRecord';
import { useLocation, useParams } from 'react-router-dom';

function ReviewWritePage({ reservation }) {
    const params = useParams();
    const reviewId = params.reviewId;
    const location = useLocation();

    const [isShow, setShow] = useState(true);
    const [deleteButtonState, setDeleteButtonState] = useState(false);

    const [imgs, setImgs] = useState([])
    const [modifyState, setModifyState] = useState(false);
    const [review, setReview] = useState({
        reservationId: 0,
        imgList: "",
        content: ""
    })

    useEffect(() => {
        if (location.pathname === `/review/${reviewId}/modify`) {
            setModifyState(true);
        }
    }, [location.pathname])

    useEffect(() => {
        setReview({
            reservationId: reservation?.id
        })
    }, [reservation])

    useEffect(() => {
        setReview(review => ({
            ...review,
            imgList: JSON.stringify(imgs)
        }))
    }, [imgs])

    const modifyReview = useQuery(
        ["modifyReviewQuery"],
        async () => {
            setModifyState(false)
            return await instance.get(`/review/${reviewId}`)
        },
        {
            enabled: modifyState,
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                console.log(response?.data)
                setReview({
                    reservationId: response?.data?.id,
                    content: response?.data?.content
                })
                setImgs(JSON.parse(response?.data?.img))
            }
        }
    )

    const writeReview = useMutation(
        async () => await instance.post("/review", review),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: "작성 성공",
                    backdrop: false,
                    timer: 1000,
                    willClose: () => {
                        window.location.replace("/review")
                    },
                    showConfirmButton: false,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            },
            onError: error => {
                const errorMessage = error?.response?.data[0].defaultMessage
                Swal.fire({
                    icon: 'warning',
                    text: errorMessage,
                    backdrop: false,
                    timer: 1000,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
                setReview(review => ({
                    ...review,
                    content: ""
                }))
            }
        }
    )

    const modifyReivew = useMutation(
        async () => await instance.put(`/review/${reviewId}`, review),
        {
            onSuccess: response => {
                Swal.fire({
                    icon: 'success',
                    text: "수정 성공",
                    backdrop: false,
                    timer: 1000,
                    willClose: () => {
                        window.location.replace("/review")
                    },
                    showConfirmButton: false,
                    customClass: {
                        popup: 'custom-timer-swal',
                        container: 'container'
                    }
                })
            }
        }
    )

    const handleAddImageOnClick = () => {
        Swal.fire({
            icon: 'question',
            text: '사진을 추가하시겠습니까?',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            customClass: {
                popup: 'custom-confirm-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        }).then(result => {
            if (result.isConfirmed) {
                const fileInput = document.createElement("input");
                fileInput.setAttribute("type", "file");
                fileInput.setAttribute("accept", "image/*");
                fileInput.setAttribute("multiple", "");
                fileInput.click();

                fileInput.onchange = (e) => {
                    const reviewImages = Array.from(e.target.files);
                    if (imgs.length + reviewImages.length > 4) {
                        Swal.fire({
                            icon: 'warning',
                            text: '사진은 4장까지 업로드 가능합니다.',
                            backdrop: false,
                            timer: 1000,
                            showConfirmButton: false,
                            customClass: {
                                popup: 'custom-timer-swal',
                                container: 'container'
                            }
                        })
                        return;
                    }
                    reviewImages.forEach(reviewImage => {
                        const storageRef = ref(storage, `user/review/${uuid()}_${reviewImage.name}`);
                        const uploadTask = uploadBytesResumable(storageRef, reviewImage);
                        uploadTask.on(
                            "state_changed",
                            (snapshot) => {
                                Swal.fire({
                                    text: '사진 등록 중...',
                                    backdrop: false,
                                    allowOutsideClick: false,
                                    didOpen: () => {
                                        Swal.showLoading();
                                    },
                                    customClass: {
                                        popup: 'custom-loading-swal',
                                        container: 'container'
                                    }
                                });
                            },
                            (error) => {
                                console.error(error);
                            },
                            async (success) => {
                                Swal.close();
                                const url = await getDownloadURL(storageRef);
                                setImgs(imgs => [...imgs, url])
                            }
                        );
                    })
                }
            }
        })
    }

    const handleReviewOnChange = (e) => {
        setReview(review => ({
            ...review,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <UserSubLayout isShow={isShow}>
            <UserSubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow} />
                    {
                        location.pathname !== `/review/${reviewId}/modify` ? <button onClick={() => writeReview.mutateAsync().catch(() => { })}>작성하기</button> :
                            <button onClick={() => modifyReivew.mutateAsync().catch(() => { })}>수정하기</button>
                    }
                </div>
                <div css={s.layout}>
                    {
                        location.pathname !== `/review/${reviewId}/modify` &&
                        <div css={s.recordBox}>
                            <ReservationRecord reservation={reservation} />
                        </div>
                    }
                    <div css={s.imgContainer}>
                        <div css={s.imgBox} onClick={handleAddImageOnClick}>
                            {
                                imgs.length === 0
                                    ?
                                    <div css={s.defaultBox} >
                                        <p>이미지를 추가하세요</p>
                                        <button onClick={handleAddImageOnClick}><MdOutlineAddPhotoAlternate /></button>
                                    </div>
                                    :
                                    imgs.map((url, index) =>
                                        <ImgBox key={index} url={url} deleteButtonState={deleteButtonState}
                                            setDeleteButtonState={setDeleteButtonState} imgs={imgs} setImgs={setImgs} />
                                    )
                            }
                        </div>
                    </div>
                    <div css={s.contentBox}>
                        <textarea name="content" value={review.content} onChange={handleReviewOnChange} placeholder='리뷰 내용을 입력해 주세요...'></textarea>
                    </div>
                </div>
            </UserSubContainer>
        </UserSubLayout>
    );
}

export default ReviewWritePage;