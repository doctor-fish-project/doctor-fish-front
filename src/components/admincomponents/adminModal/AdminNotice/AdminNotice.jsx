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
    const [modifyNotice, setModifyNotice] = useState();

    const quillRef = useRef(null);

    console.log(noticeId);

    useEffect(() => {
        notice.refetch();
    }, [noticeOpen])

    const notice = useQuery(
        ["noticeQuery"],
        async () => await adminInstance.get(`/admin/announce/${noticeId}`),
        {
            enabled: true,
            refetchOnWindowFocus: false,
            retry: 0
        }
    )

    console.log(notice);

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