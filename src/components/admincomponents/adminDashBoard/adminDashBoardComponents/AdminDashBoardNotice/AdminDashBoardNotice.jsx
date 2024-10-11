import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { tests } from '../../../../../constants/admin/tests';

function AdminDashBoardNotice(props) {
    return (
        <div css={s.layout}>
            {
                tests.slice(0, 5).map((test, index) => (
                    <div key={index} css={s.container}>
                        <div>{test.title}</div>
                        <p>{test.name}</p>
                        <div>{test.date}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminDashBoardNotice;