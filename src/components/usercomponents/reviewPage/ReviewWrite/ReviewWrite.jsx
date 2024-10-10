import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../SubLayout/SubLayout';
import SubContainer from '../../SubContainer/SubContainer';
import BackButton from '../../BackButton/BackButton';
import { storage } from '../../../../firebase/firebase';
import { v4 as uuid } from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { CiCirclePlus } from "react-icons/ci";
import ImgBox from '../ImgBox/ImgBox';
import { CircleLoader, RingLoader } from "react-spinners";

function ReviewWrite(props) {
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

    const hanldeWriteReviewOnClick = () => {
        console.log(review)
    }

    const handleAddImageOnClick = () => {
        if (window.confirm("리뷰 사진을 추가하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.click();

            fileInput.onchange = (e) => {
                const profileImage = Array.from(e.target.files)[0];

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
                        setImgs([...imgs, url])
                        setImgState(false)
                    }
                );
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
                    <button onClick={hanldeWriteReviewOnClick}>작성하기</button>
                </div>
                <div css={s.imgContainer}>
                    <div css={s.imgBox}>
                        {
                            imgState ? <div css={s.loadingLayout}><RingLoader /></div> :
                                <>
                                    {
                                        imgs.length === 0 ? <p css={s.defaultText}>이미지를 추가하세요</p> :
                                            imgs.map((url, index) =>
                                                <ImgBox key={index} url={url} deleteButtonState={deleteButtonState} setDeleteButtonState={setDeleteButtonState} imgs={imgs} setImgs={setImgs} />
                                            )
                                    }
                                </>
                        }
                    </div>
                    <div css={s.imgAddBox}>
                        {
                            imgs.length === 4 ? <></> :
                                <button onClick={handleAddImageOnClick}><CiCirclePlus /></button>

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

export default ReviewWrite;