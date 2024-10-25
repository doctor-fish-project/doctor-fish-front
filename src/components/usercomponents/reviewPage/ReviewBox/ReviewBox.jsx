import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../../apis/utils/instance';
import FillHeart from '../../../FillHeart/FillHeart';
import EmptyHeart from '../../../EmptyHeart/EmptyHeart';

function ReviewBox({ review, onClick }) {
    const reviewImgs = JSON.parse(review?.img === undefined ? '[]' : review?.img)

    const queryClient = useQueryClient();

    const [mouseOverState, setMouseOverState] = useState(false);
    const [index, setIndex] = useState(0);
    
    const like = useMutation(
        async () => await instance.post(`/review/like/${review.id}`),
        {
            onSuccess: response => {
                queryClient.invalidateQueries("reviewsQuery");
                queryClient.invalidateQueries("reviewQuery");
            }
        }
    )

    const dislike = useMutation(
        async () => await instance.delete(`/review/like/${review.id}`),
        {
            onSuccess: response => {
                queryClient.invalidateQueries("reviewsQuery");
                queryClient.invalidateQueries("reviewQuery");
            }
        }
    )

    const handleMouseOver = () => {
        setMouseOverState(true)
    }

    const handleMouseOut = () => {
        setMouseOverState(false)
    }

    const handleLikeOnClick = (e) => {
        e.stopPropagation();
        like.mutateAsync().catch(() => {})
    }

    const handleDislikeOnClick = (e) => {
        e.stopPropagation();
        dislike.mutateAsync().catch(() => {})
    }

    const preImgOnClick = (e, index) => {
        e.stopPropagation();
        if (index > 0 && index < reviewImgs.length) {
            setIndex(index - 1)
        }
    }

    const nextImgOnClick = (e, index) => {
        e.stopPropagation();
        if (index === 0 || index < reviewImgs.length) {
            setIndex(index + 1)
        }
    }


    return (
        <div css={s.layout} onClick={onClick}>
            <div css={s.nameBox}>
                <div css={s.profileBox}>
                    <img src={review?.userImg} alt="" />
                </div>
                <p>{review?.userName}</p>
            </div>
            {
                reviewImgs === null ? <></> : reviewImgs.length === 0 ? <></> :
                    <div css={s.imgBox} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        {
                            !!mouseOverState &&
                                index !== 0 ? <button css={s.preButton} onClick={(e) => preImgOnClick(e, index)}><IoIosArrowBack /></button>
                                : index < reviewImgs?.length - 1 && <button css={s.nextButton} onClick={(e) => nextImgOnClick(e, index)}><IoIosArrowForward /></button>
                        }
                        <img src={reviewImgs[index]} alt="" />
                    </div>
            }
            <div css={s.dateAndLike}>
                <div>
                    <p>{!!review?.isLike ? <FillHeart onClick={(e) => handleDislikeOnClick(e)}/> : <EmptyHeart onClick={(e) => handleLikeOnClick(e)}/>}</p>
                    <p>{review?.registerDate?.slice(0, 10)}</p>
                </div>
                <p>좋아요 {review?.likeCount}</p>
            </div>
            <div css={s.contentBox}>
                {review?.content}
            </div>
        </div>
    );
}

export default ReviewBox;