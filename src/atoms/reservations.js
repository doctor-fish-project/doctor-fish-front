import { atom } from "recoil";

export const reservationAtom = atom({
    key: "reservationAtom",
    default: {}
})

export const reservationIdAtom = atom({
    key: "reservationIdAtom",
    default: 0
})

export const modifyStateAtom = atom({
    key: "modifyStateAtom",
    default : false
})