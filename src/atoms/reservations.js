import { atom } from "recoil";

export const reservationAtom = atom({
    key: "reservationAtom",
    default: {}
})

export const modifyReservationIdAtom = atom({
    key: "modifyReservationIdAtom",
    default : 0
})