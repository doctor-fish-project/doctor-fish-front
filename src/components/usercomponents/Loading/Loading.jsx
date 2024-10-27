import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function Loading(props) {
    return (
        <div css={s.layout}>
            <div css={s.imgBox}>
                <img src="/로고.png" alt=''  />
            </div>
        </div>
    );
}

export default Loading;