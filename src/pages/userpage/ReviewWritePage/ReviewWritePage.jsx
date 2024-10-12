import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { RingLoader } from "react-spinners";
import ImgBox from '../../../components/usercomponents/reviewPage/ImgBox/ImgBox';
import BackButton from '../../../components/usercomponents/BackButton/BackButton';
import SubLayout from '../../../components/usercomponents/SubLayout/SubLayout';
import SubContainer from '../../../components/usercomponents/SubContainer/SubContainer';
import { storage } from '../../../firebase/firebase';
import { useMutation } from 'react-query';
import { instance } from '../../../apis/utils/instance';

function ReviewWritePage(props) {
    const [isShow, setShow] = useState(true);
    const [imgState, setImgState] = useState(false);
    const [deleteButtonState, setDeleteButtonState] = useState(false);

    const [imgs, setImgs] = useState([])

    const [review, setReview] = useState({
        imgList: "",
        content: ""
    })

    useEffect(() => {
        setReview(review => ({
            ...review,
            imgList: JSON.stringify(imgs)
        }))
    }, [imgs])

    const writeReview = useMutation(
        async () => await instance.post("/review", review),
        {
            onSuccess: response => {

            },
            onError: error => {

            }
        }
    )

    const handleAddImageOnClick = () => {
        if (window.confirm("리뷰 사진을 추가하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.setAttribute("multiple", "");
            fileInput.click();

            fileInput.onchange = (e) => {
                const profileImages = Array.from(e.target.files);

                profileImages.forEach(profileImage => {
                    const storageRef = ref(storage, `user/profile/${uuid()}_${profileImage.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, profileImage);
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {
                            setImgState(true);
                        },
                        (error) => {
                            console.error(error);
                        },
                        async (success) => {
                            const url = await getDownloadURL(storageRef);
                            setImgs(imgs => [...imgs, url])
                            setImgState(false);
                        }
                    );
                })
            }
        }
    }

    const handleReviewOnChange = (e) => {
        setReview(review => ({
            ...review,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow} />
                    <button onClick={() => writeReview.mutateAsync().catch(() => {})}>작성하기</button>
                </div>
                <div css={s.imgContainer}>
                    <div css={s.imgBox}>
                        {
                            imgState ? <div css={s.loadingLayout}><RingLoader /></div> :
                                <>
                                    {
                                        imgs.length === 0
                                            ?
                                            <div css={s.defaultBox}>
                                                <p>이미지를 추가하세요</p>
                                                <button onClick={handleAddImageOnClick}><MdOutlineAddPhotoAlternate /></button>
                                            </div>
                                            :
                                            imgs.map((url, index) =>
                                                <ImgBox key={index} url={url} deleteButtonState={deleteButtonState}
                                                    setDeleteButtonState={setDeleteButtonState} imgs={imgs} setImgs={setImgs} />
                                            )
                                    }
                                </>
                        }
                    </div>
                </div>
                <div css={s.contentBox}>
                    <textarea name="content" value={review.content} onChange={handleReviewOnChange}></textarea>
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default ReviewWritePage;