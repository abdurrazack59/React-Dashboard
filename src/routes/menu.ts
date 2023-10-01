import {
  DollarOutlined,
  LineChartOutlined,
  RedEnvelopeOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Dashboard from "../pages/Dashboard";

export const menu: any[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: LineChartOutlined,
    component: Dashboard,
    access: "canClient",
  },
  {
    path: "/admin/leads",
    name: "Users",
    icon: UserOutlined,
    component: "",
    access: "canAdmin",
  },

  {
    path: "/admin",
    name: "Transactions",
    icon: DollarOutlined,
    access: "canAdmin",
    routes: [
      {
        path: "/admin/transactions",
        name: "Deposit",
        icon: DollarOutlined,
        component: "",
      },

      {
        path: "/admin/withdrawTransaction",
        name: "Withdraw",
        icon: DollarOutlined,
        component: "",
      },
    ],
  },

  {
    path: "/admin/admin",
    name: "Settings",
    icon: SettingOutlined,
    component: "",
    access: "canAdmin",
  },
  {
    path: "/admin/ibrequests",
    name: "IB Requests",
    icon: RedEnvelopeOutlined,
    component: "",
    access: "canAdmin",
  },
];
