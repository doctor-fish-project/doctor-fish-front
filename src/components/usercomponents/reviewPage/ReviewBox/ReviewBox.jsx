import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FcLike } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ReviewBox({ review, onClick }) {
    const reviewImgs = JSON.parse(review.img)

    const [mouseOverState, setMouseOverState] = useState(false);

    const [index, setIndex] = useState(0);

    const handleMouseOver = () => {
        setMouseOverState(true)
    }

    const handleMouseOut = () => {
        setMouseOverState(false)
    }

    const preImgOnClick = (index) => {
        if (index > 0 && index < reviewImgs.length) {
            setIndex(index - 1)
        }
    }

    const nextImgOnClick = (index) => {
        if (index === 0 || index < reviewImgs.length) {
            setIndex(index + 1)
        }
    }


    return (
        <div css={s.layout} onClick={onClick}>
            <div css={s.nameBox}>
                <img src='https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f' alt="" />
                <p>{review.userName}</p>
            </div>
            {
                reviewImgs === null ? <></> : reviewImgs.length === 0 ? <></> :
                    <div css={s.imgBox} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {
                            !!mouseOverState &&
                                index !== 0 ? <button css={s.preButton} onClick={() => preImgOnClick(index)}><IoIosArrowBack /></button>
                                : index < reviewImgs?.length - 1 && <button css={s.nextButton} onClick={() => nextImgOnClick(index)}><IoIosArrowForward /></button>
                        }
                        <img src={reviewImgs[index]} alt="" />
                    </div>
            }
            <div css={s.dateAndLike}>
                <p>{review?.registerDate?.slice(0, 10)}</p>
                <p><FcLike />10</p>
            </div>
            <div css={s.contentBox}>
                {review.content}
            </div>
        </div>
    );
}

export default ReviewBox;