import { IoHomeOutline, IoCalendarOutline, IoCalendarNumberOutline, IoClipboardOutline, IoNotificationsOutline, IoSettingsOutline  } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";

export const categorys = [
    {
        name: "홈",
        icon: <IoHomeOutline />,
        link: "/admin/dashboard"
    },
    {
        name: "전체예약",
        icon: <IoCalendarOutline />,
        link: "/admin/reservation"
    },
    {
        name: "당일예약",
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
    },
    {
        name: "공지사항",
        icon: <IoNotificationsOutline />,
        link: "/admin/notice"
    },
    {
        name: "설정",
        icon: <IoSettingsOutline />,
        link: "/admin/setting"
    },
]