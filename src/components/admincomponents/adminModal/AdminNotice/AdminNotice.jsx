import React, { useMemo, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminModalLayout from '../AdminModalLayout/AdminModalLayout';
import { useRecoilState } from 'recoil';
import { adminNoticeModalAtom } from '../../../../atoms/modalAtoms';
import { IoIosClose } from 'react-icons/io';
import { noticeIdAtom } from '../../../../atoms/adminAtoms';
import ReactQuill from 'react-quill';

function AdminNotice({ containerRef }) {
    const [noticeOpen, setNoticeOpen] = useRecoilState(adminNoticeModalAtom);
    const [noticeId, setNoticeId] = useRecoilState(noticeIdAtom);

    const quillRef = useRef(null);

    const closeModal = () => {
        setNoticeOpen(false)
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
                        <button>수정하기</button>
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

export default AdminNotice;