import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import ModalLayout from '../ModalLayout/ModalLayout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { bellAlramModalAtom } from '../../../../atoms/modalAtoms';
import { alarmsAtom } from '../../../../atoms/dashboardAtoms';

function BellAlram({ containerRef }) {

    const [bellAlarm, setBellAlarmOpen] = useRecoilState(bellAlramModalAtom);
    const alarms = useRecoilValue(alarmsAtom);

    const [ani, setAni] = useState("userBellAlramOpen");

    const closeModal = () => {
        setAni("userBellAlramClose")
        setTimeout(() => {
            setAni("userBellAlramOpen");
            setBellAlarmOpen(false);
        }, 500)
    }

    return (
        <ModalLayout containerRef={containerRef} isOpen={bellAlarm} closeModal={closeModal} ani={ani}
            width={"80%"} height={"20%"} inset={"90px 68px 0px"} borderTop={"none"} borderBottom={"1px solid #dbdbdb"} borderLeft={"1px solid #dbdbdb"}>
            <div css={s.layout}>
                <div css={s.container(alarms?.length)}>
                    {
                        alarms?.length === 0 ? <p>알림이 없습니다.</p> :
                            <>
                                {
                                    alarms?.map(alarm =>
                                        <div key={alarm?.id}>
                                            <pre>{alarm?.message?.replace(".", ".\n")}</pre>
                                        </div>
                                    )
                                }
                              
                            </>
                    }
                </div>
            </div>
        </ModalLayout>
    );
}

export default BellAlram;