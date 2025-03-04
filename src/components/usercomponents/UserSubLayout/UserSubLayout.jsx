import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function UserSubLayout({ isShow, children}) {
    return (
        <div css={s.layout(isShow)}>
            {children}
        </div>
    );
}

export default UserSubLayout;