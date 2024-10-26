import React, { useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminNoticeWriteModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { IoIosClose } from "react-icons/io"
import ReactQuill from 'react-quill';
import { adminInstance } from '../../../../apis/utils/instance';
import Swal from 'sweetalert2';


function AdminNoticeWrite({ containerRef }) {
    const quillRef = useRef(null);

    const [noticeWriteOpen, setNoticeWriteOpen] = useRecoilState(adminNoticeWriteModalAtom);

    const [ noticeInput, setNoticeInput ] = useState({
        title: "",
        content: ""
    })

    const closeModal = () => {
        setNoticeWriteOpen(false)
    }

    const handleWriteButtonOnClick = async () => {
        try {
            await adminInstance.post("/admin/announce", noticeInput);
            alert("작성 완료");
            closeModal();
            window.location.reload();
        } catch(e) {
            const fieldErrors = e.response.data;

            for(let fieldError of fieldErrors) {
                if(fieldError.field === "title") {
                    alert(fieldError.defaultMessage);
                    return;
                }
            }
            for(let fieldError of fieldErrors) {
                if(fieldError.field === "content") {
                    alert(fieldError.defaultMessage);
                    return;
                }
            }
        }
    }

    const handleTitleOnChange = (e) => {
        setNoticeInput(noticeInput => ({
            ...noticeInput,
            title: e.target.value.trim() === "" ? "" : e.target.value 
        }));
    }

    const handleContentOnChange = (value) => {
        setNoticeInput(noticeInput => ({
            ...noticeInput,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value
        }));
    }

    const toolbarOptions = useMemo(() => [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }, { 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video', 'formula'],
        ['blockquote', 'code-block'],
    ], []);

    return (
        <AdminModalLayout containerRef={containerRef} isOpen={noticeWriteOpen} closeModal={closeModal}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.quillBox}>
                    <div css={s.header}>
                        <h1>공지사항</h1>
                        <button onClick={handleWriteButtonOnClick}>작성하기</button>
                    </div>
                    <input css={s.titleInput} type="text" onChange={handleTitleOnChange} name="title" value={noticeInput.title} placeholder="게시글의 제목을 입력하세요." />
                    <ReactQuill
                        ref={quillRef}
                        className='quillStyle'
                        style={{
                            boxSizing: "border-box",
                            border: "none",
                            width: "100%",
                            height: "500px"
                        }}
                        modules={{
                            toolbar: {
                                container: toolbarOptions,
                                handlers: {
                                }
                            }
                        }}
                        onChange={handleContentOnChange}
                    />
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminNoticeWrite;