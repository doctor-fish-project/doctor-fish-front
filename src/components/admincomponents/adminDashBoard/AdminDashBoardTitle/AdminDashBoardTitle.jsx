import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ReactSelect from 'react-select';

function AdminDashBoardTitle({ title, options, year, setYear }) {

    const handleOptionOnChange = (option) => {
        setYear(option)
    }
    
    return (
        <div css={s.layout}>
            <p>{title}</p>
            {
                !!options &&
                <ReactSelect
                    placeholder="연도를 선택하세요"
                    onChange={handleOptionOnChange}
                    styles={{
                        control: (style) => ({
                            ...style,
                            margin: "0",
                            padding: "0px 11px",
                            border: "none",
                            width: "120px",
                            outline: "none",
                            boxShadow: "none",
                            textAlign: "center",
                            ":active": {
                                border: "none",
                            },
                            ":focus": {
                                border: "none",
                                boxShadow: "none"
                            }
                        }),
                        input: (style) => ({
                            ...style,
                            boxShadow: "none", // input에 box-shadow 제거
                            caretColor: "transparent", // 커서 깜빡임 제거
                        }),
                        indicatorSeparator: () => null,
                    }}
                    options={options}
                    value={year}
                />
            }
        </div>

    );
}

export default AdminDashBoardTitle;