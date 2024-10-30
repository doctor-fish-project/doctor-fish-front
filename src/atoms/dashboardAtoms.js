import { atom } from "recoil";

export const alarmStateAtom = atom({
    key: "alarmStateAtom",
    default: false
})

export const reservationAlarmsAtom = atom({
    key: "reservationAlarmsAtom",
    default: []
})

export const announcementAlarmsAtom = atom({
    key: "announcementAlarmsAtom",
    default: []
})