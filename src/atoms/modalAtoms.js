import { atom } from "recoil";

export const signupModalAtom = atom({
    key: "signupModalState",
    default: false
})

export const signinModalAtom = atom({
    key: "signinModalAtom",
    default: false
})

export const reservationModalAtom = atom({
    key: "reservationModalAtom",
    default:false
})

export const adminReviewModalAtom = atom({
    key: "adminReviewModalAtom",
    default: false
})

export const adminNoticeModalAtom = atom({
    key: "adminNoticeModalAtom",
    default: false
})