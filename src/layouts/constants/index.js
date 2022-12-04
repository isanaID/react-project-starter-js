import { MdDashboard } from "react-icons/md";
import { RiHealthBookFill, RiUserHeartFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";

export const MENU_ITEMS = [
  {
    groupTitle: undefined,
    children: [
      {
        title: "Summary",
        icon: MdDashboard,
        to: "/summary",
      },
    ],
  },
];
