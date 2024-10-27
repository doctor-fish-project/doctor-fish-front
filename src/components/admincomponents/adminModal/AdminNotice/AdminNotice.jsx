import React, { useEffect, useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { useRecoilState } from 'recoil';
import { adminNoticeModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from 'react-icons/io';
import { noticeIdAtom } from '../../../../atoms/adminAtoms';
import ReactQuill from 'react-quill';
import { useQuery } from 'react-query';
import { adminInstance } from '../../../../apis/utils/instance';

function AdminNotice({ containerRef }) {
    const [noticeOpen, setNoticeOpen] = useRecoilState(adminNoticeModalAtom);
    const [noticeId, setNoticeId] = useRecoilState(noticeIdAtom);
    const [modifyNotice, setModifyNotice] = useState({
        title: "",
        content: ""
    });
    const [setStatus, setSetStatus] = useState(true);

    const quillRef = useRef(null);

    useEffect(() => {
        setSetStatus(true);
    }, [noticeOpen]);

    const notice = useQuery(
        ["noticeQuery", noticeId],
        async () => await adminInstance.get(`/admin/announce/${noticeId}`),
        {   
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    useEffect(() => {
        if (notice.isSuccess) {
            if(setStatus) {
                setModifyNotice(notice?.data?.data);
                setSetStatus(false);
            }
        }
    }, [notice]);

    const handleTitleOnChange = (e) => {
        setModifyNotice(modifyNotice => ({
            ...modifyNotice,
            title: e.target.value.trim() === "" ? "" : e.target.value
        }))
    }

    const handleContentOnChange = (value) => {
        setModifyNotice(modifyNotice => ({
            ...modifyNotice,
            content: quillRef.current.getEditor().getText().trim() === "" ? "" : value
        }))
    }

    const closeModal = () => {
        setNoticeId(0);
        setNoticeOpen(false)
    }

    const handleButtonOnClick = async () => {
        try {
            await adminInstance.put(`/admin/announce/${noticeId}`, modifyNotice);
            alert("수정 완료");
            closeModal();
            window.location.reload();
        } catch(e) {
            console.log(e);
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
        <AdminModalLayout containerRef={containerRef} isOpen={noticeOpen} closeModal={closeModal}>
            <div css={s.layout}>
                <div css={s.cancelButtonBox}>
                    <button onClick={closeModal}><IoIosClose /></button>
                </div>
                <div css={s.quillBox}>
                    <div css={s.header}>
                        <h1>공지사항</h1>
                        <button onClick={handleButtonOnClick}>수정하기</button>
                    </div>
                    <input css={s.titleInput} type="text" onChange={handleTitleOnChange} name="title" value={modifyNotice?.title} placeholder="게시글의 제목을 입력하세요." />
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
                        value={modifyNotice?.content}
                        onChange={handleContentOnChange}
                    />
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminNotice;