import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminListHeader({ manageList }) {
    return (
        <thead css={s.layout(manageList.length)}>
            <tr>
                {
                    manageList.map((management, index) => (
                        <th key={index}>{management}</th>
                    ))
                }
            </tr>
        </thead>
    );
}

export default AdminListHeader;