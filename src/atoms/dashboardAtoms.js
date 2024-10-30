import { atom } from "recoil";

export const alarmStateAtom = atom({
    key: "alarmStateAtom",
    default: false
})

export const alarmsAtom = atom({
    key: "alarmsAtom",
    default: []
})