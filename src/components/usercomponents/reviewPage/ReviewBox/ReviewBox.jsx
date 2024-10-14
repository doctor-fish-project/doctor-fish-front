import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { FcLike } from "react-icons/fc";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ReviewBox({ review }) {
    const reviewImgs = JSON.parse(review?.img)

    const [mouseOverState, setMouseOverState] = useState(false);

    const [index, setIndex] = useState(0);

    const handleMouseOver = () => {
        setMouseOverState(true)
    }

    const handleMouseOut = () => {
        setMouseOverState(false)
    }

    const nextImgOnClick = (index) => {
        if (index === 0 || index < reviewImgs.length) {
            setIndex(index + 1)
        }
    }

    const preImgOnClick = (index) => {
        if (index > 0 && index < reviewImgs.length) {
            setIndex(index - 1)
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.nameBox}>
                <img src='https://firebasestorage.googleapis.com/v0/b/userprofile-9dd9e.appspot.com/o/user%2Fdefault.png?alt=media&token=caad563b-86be-48bb-a70a-a717042d870f' alt="" />
                <p>{review.userName}</p>
            </div>
            {
                reviewImgs === null ? <></> :
                    <div css={s.imgBox} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {
                            !!mouseOverState && index !== 0 && <button css={s.preButton} onClick={() => preImgOnClick(index)}><IoIosArrowBack /></button>
                        }
                           <img src={reviewImgs[index]} alt="" />
                        {
                            !!mouseOverState && index === 0 && <button css={s.nextButton} onClick={() => nextImgOnClick(index)}><IoIosArrowForward /></button>
                        }
                    </div>
            }
            <div css={s.dateAndLike}>
                <p>{review.registerDate}</p>
                <p><FcLike />10</p>
            </div>
            <div css={s.contentBox}>
                {review.content}
            </div>
        </div>
    );
}

export default ReviewBox;