
import { IoHomeOutline, IoCalendarOutline, IoCalendarNumberOutline, IoClipboardOutline, IoNotificationsOutline, IoSettingsOutline  } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

export const categorys = [
    {
        name: "홈",
        icon: <IoHomeOutline />,
        link: "/admin/dashboard"
    },
    {
        name: "예약관리",
        icon: <IoCalendarOutline />,
        link: "/admin/reservation"
    },
    {
        name: "예약현황",
        icon: <IoCalendarNumberOutline />,
        link: "/admin/reservationnow"
    },
    {
        name: "리뷰 및 댓글관리",
        icon: <IoClipboardOutline  />,
        link: "/admin/review"
    },
    {
        name: "회원관리",
        icon: <LuUser2 />,
        link: "/admin/users"
    }
]