import React from 'react';
import { test2 } from '../../../../../constants/admin/test2';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminDashBoardContent(props) {
    return (
        <>
            {
                test2.slice(0, 5).map((test, index) => (
                    <div key={index} css={s.layout}>
                        <p>{test.date}</p>
                        <div>{test.name}</div>
                        <p>{test.doctor}</p>
                        <div>{test.status}</div>
                    </div>
                ))
            }
        </>
    );
}

export default AdminDashBoardContent;