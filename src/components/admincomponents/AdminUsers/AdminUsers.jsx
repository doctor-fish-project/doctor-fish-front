import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminMainLayout from '../AdminMainLayout/AdminMainLayout';
import AdminContainer from '../AdminContainer/AdminContainer';
import { IoIosSearch } from "react-icons/io";

function AdminUsers(props) {
    return (
        <AdminMainLayout>
            <AdminContainer>
                <div css={s.layout}>
                    <div css={s.searchBox}>
                        <input type="text" />
                        <button><IoIosSearch /></button>
                    </div>
                </div>
            </AdminContainer>
        </AdminMainLayout>
    );
}

export default AdminUsers;