import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function Loading(props) {
    return (
        <div css={s.layout}>
            <div css={s.titleContainer}>
                <span>친절한 의사들이 함께합니다</span>
            </div>
            <div css={s.imgBox}>
                <img src="/docter2.png" alt=''  />
            </div>
            <div css={s.downContainer}>
                <h2>MEDIBOOK</h2>
            </div>
        </div>
    );
}

export default Loading;