import { atom } from "recoil";

export const signupModalAtom = atom({
    key: "signupModalState",
    default: false
})

export const signinModalAtom = atom({
    key: "signinModalAtom2",
    default: false
})

export const adminSigninModalAtom = atom({
    key: "adminSigninModalAtom",
    default: false
})

export const reservationCalendarModalAtom = atom({
    key: "reservationCalendarModalAtom",
    default: false
})