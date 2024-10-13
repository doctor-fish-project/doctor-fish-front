import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminListHeader({ manageList }) {
    return (
        <div css={s.layout}>
            {
                manageList.map((management, index) => (
                    <div key={index}>{management}</div>
                ))
            }
        </div>
    );
}

export default AdminListHeader;