import React from 'react';
import ReactSelect from 'react-select';

function AdminSelectBox({ onChange, timeOptions, leaveDate }) {

    return (
        <ReactSelect
            placeholder="시간을 선택하세요"
            onChange={onChange}
            styles={{
                control: (style) => ({
                    ...style,
                    margin: "0",
                    border: "none",
                    padding: "0px 11px",
                    width: "220px",
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
                indicatorSeparator: () => null
            }}
            options={timeOptions}
            value={leaveDate}
        />
    );
}

export default AdminSelectBox;