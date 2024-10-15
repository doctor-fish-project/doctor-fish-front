import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoClose } from "react-icons/io5";
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase';
import Swal from 'sweetalert2';

function ImgBox({ url, deleteButtonState, setDeleteButtonState, imgs, setImgs }) {

    const handleDeleteImageOnClick = (e) => {
        e.stopPropagation();
        Swal.fire({
            icon: 'question',
            text: '삭제하시겠습니까?',
            backdrop: false,
            showCancelButton: true,
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            customClass: {
                popup: 'custom-cancel-swal',
                container: 'container',
                confirmButton: 'confirmButton',
            }
        }).then(result => {
            if (result.isConfirmed) {
                const imageRef = ref(storage, url);

                deleteObject(imageRef)
                    .then(() => {
                        const filterImgs = imgs.filter(imgUrl => imgUrl !== url)
                        setImgs(filterImgs)
                    })
                    .catch((error) => {

                    });
            }
        })
    }

    const handleDeleteOnMouseOver = () => {
        setDeleteButtonState(true)
    }

    const handleDeleteOnMouseOut = () => {
        setDeleteButtonState(false)
    }


    return (
        <div css={s.layout} onClick={handleDeleteImageOnClick} onMouseOver={handleDeleteOnMouseOver} onMouseOut={handleDeleteOnMouseOut}>
            {
                deleteButtonState ? <IoClose onClick={handleDeleteImageOnClick} /> : <></>
            }
            <img src={url} alt="" />
        </div>
    );
}

export default ImgBox;