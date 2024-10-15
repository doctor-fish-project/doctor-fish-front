import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function AdminTableHeader({ tableheaders }) {

    return (
        <thead css={s.layout(tableheaders?.length)}>
            <tr>
                {
                    tableheaders?.map(tableheader => (
                        <th key={tableheader.id}>{tableheader.name}</th>
                    ))
                }
            </tr>
        </thead>
    );
}

export default AdminTableHeader;