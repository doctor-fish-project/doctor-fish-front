import { atom } from "recoil";

export const categoryIdAtom = atom({
    key: "categoryIdAtom",
    default: 0
})

export const reviewIdAtom = atom({
    key: "reviewIdAtom",
    default: 0
})

export const noticeIdAtom = atom({
    key: "noticeIdAtom",
    default: 0
})

export const searchAtom = atom({
    key: "searchAtom",
    default: ""
})

export const searchClickAtom = atom({
    key: "searchClickAtom",
    default: false
})