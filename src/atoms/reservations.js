import { atom } from "recoil";

export const reservationIdAtom = atom({
    key: "reservationIdAtom",
    default: 0
})

export const modifyStateAtom = atom({
    key: "modifyStateAtom",
    default : false
})