import React, { useMemo, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { adminNoticeWriteModalAtom } from '../../../../atoms/modalAtoms';
import { useRecoilState } from 'recoil';
import { IoIosClose } from "react-icons/io"
import ReactQuill from 'react-quill';


function AdminNoticeWrite({ containerRef }) {
    const [noticeWriteOpen, setNoticeWriteOpen] = useRecoilState(adminNoticeWriteModalAtom);
    const quillRef = useRef(null);

    const closeModal = () => {
        setNoticeWriteOpen(false)
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
                        <button>작성하기</button>
                    </div>
                    <input css={s.titleInput} type="text" name="title" placeholder="게시글의 제목을 입력하세요." />
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
                    />
                </div>
            </div>
        </AdminModalLayout>
    );
}

export default AdminNoticeWrite;