import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoSearchOutline } from "react-icons/io5";

function AdminPageContainer({ title, children }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.titleAndInput}>
                    <div>
                        <p>{title}</p>
                        <p>총 124건</p>
                    </div>
                    <input type="text" placeholder='검색어를 입력해주세요' />
                    <button><IoSearchOutline /></button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default AdminPageContainer;