import { atom } from "recoil";

export const signupModalAtom = atom({
    key: "signupModalState",
    default: false
})

export const signinModalAtom = atom({
    key: "signinModalAtom",
    default: false
})

export const findUserModalAtom = atom({
    key: "findUserModalAtom",
    default: false
})

export const resetPasswordModalAtom = atom({
    key: "resetPasswordModalAtom",
    default: false
})

export const reservationModalAtom = atom({
    key: "reservationModalAtom",
    default:false
})

export const reservationDetailModalAtom = atom({
    key: "reservationDetailModalAtom",
    default:false
})

export const bellAlramModalAtom = atom({
    key: "bellAlramModalAtom",
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

export const adminNoticeWriteModalAtom = atom({
    key: "adminNoticeWriteModalAtom",
    default: false
})