import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import AdminSelectBox from '../../AdminSelectBox/AdminSelectBox';

function AdminDashBoardTitle({ title, options, year, setYear }) {

    const handleOptionOnChange = (option) => {
        setYear(option)
    }
    
    return (
        <div css={s.layout}>
            <p>{title}</p>
            {
                !!options &&
                <AdminSelectBox 
                    onChange={handleOptionOnChange} 
                    timeOptions={options} 
                    leaveDate={year} 
                    width={"120px"}
                />
            }
        </div>

    );
}

export default AdminDashBoardTitle;