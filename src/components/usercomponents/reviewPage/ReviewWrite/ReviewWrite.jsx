import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SubLayout from '../../SubLayout/SubLayout';
import SubContainer from '../../SubContainer/SubContainer';
import BackButton from '../../BackButton/BackButton';

function ReviewWrite(props) {
    const [ isShow, setShow ] = useState(true);
    const [ inputState, setInputState ] = useState(true);
    const [ loadPercent, setLoadPercent ] = useState(0);
    const [ imgState, setImgState ] = useState(false);
    const [ input, setInput ] = useState({
        img: [],
        content: ""
    })

    const hanldeWriteOnClick = () => {
        console.log(input)
    }

    const handleAddImageOnClick = () => {
        if(window.confirm("리뷰 사진을 추가하시겠습니까?")) {
            const fileInput = document.createElement("input");
            fileInput.setAttribute("type", "file");
            fileInput.setAttribute("accept", "image/*");
            fileInput.click();

            // fileInput.onchange = (e) => {
            //     const profileImage = Array.from(e.target.files)[0];
            //     setLoadPercent(0);

            //     const storageRef = ref(storage, `user/profile/${uuid()}_${profileImage.name}`);
            //     const uploadTask = uploadBytesResumable(storageRef, profileImage);
            //     uploadTask.on(
            //         "state_changed",
            //         (snapshot) => {
            //             setImgState(true);
            //             setLoadPercent(
            //                 Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //             );
            //         },
            //         (error) => {
            //             console.error(error);
            //         },
            //         async (success) => {
            //             const url = await getDownloadURL(storageRef);
            //             setImgState(false)
                        
            //         }
            //     );
                
            // }
            
        }
    }

    const handleInputOnChange = (e) => {
        setInput(input => ({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <SubLayout isShow={isShow}>
            <SubContainer>
                <div css={s.buttonBox}>
                    <BackButton setShow={setShow}/>
                    <button onClick={hanldeWriteOnClick}>작성하기</button>
                </div>
                <div css={s.imgBox}>
                    <button onClick={handleAddImageOnClick}>사진 추가</button>
                </div>
                <div css={s.contentBox}>
                    <textarea name="content" value={input.content} onChange={handleInputOnChange}></textarea>
                </div>
            </SubContainer>
        </SubLayout>
    );
}

export default ReviewWrite;