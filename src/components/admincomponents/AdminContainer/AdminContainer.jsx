import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function AdminContainer({ children }) {
    
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default AdminContainer;