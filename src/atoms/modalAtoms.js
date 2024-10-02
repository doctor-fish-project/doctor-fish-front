import { atom } from "recoil";

export const signupModalAtom = atom({
    key: "signupModalState",
    default: false
})

export const signinModalAtom = atom({
    key: "signinModalAtom",
    default: false
})

export const adminSigninModalAtom = atom({
    key: "adminSigninModalAtom",
    default: false
})