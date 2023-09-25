import { useState } from "react";

function SideNav() {

    const [menuActive, setMenuActive] = useState(null)

  const menu = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: "LineChart",
      component: "./Dashboard/Dashboard",
      //  access: 'canClient',
    },
    {
      path: "/admin/admindashboard",
      // name: 'Dashboard',
      icon: "LineChart",
      component: "./Admin/AdminDashboard",
      access: "canAdmin",
    },
    {
      path: "/admin/leads",
      name: "Users",
      icon: "user",
      component: "./Admin/Leads",
      access: "canAdmin",
    },

    {
      path: "/admin",
      name: "Transactions",
      icon: "dollar",
      access: "canAdmin",
      routes: [
        {
          path: "/admin/transactions",
          name: "Deposit",
          icon: "dollar",
          component: "./Admin/TransactionRequests",
        },

        {
          path: "/admin/withdrawTransaction",
          name: "Withdraw",
          icon: "dollar",
          component: "./Admin/WithdrawTransaction",
        },
      ],
    },

    {
      path: "/admin/admin",
      name: "Settings",
      icon: "setting",
      component: "./Admin/Admin",
      access: "canAdmin",
    },
    // {
    //   path: '/admin/ibsettings',
    //   name: 'IB Settings',
    //   icon: 'setting',
    //   component: './Admin/IBSettings',
    //   access: 'canAdmin',
    // },
    {
      path: "/admin/ibrequests",
      name: "IB Requests",
      // icon: 'setting',
      component: "./Admin/IBRequests",
      access: "canAdmin",
    },

    {
      path: "/user",
      layout: false,
      routes: [
        {
          name: "login",
          path: "/user/login",
          component: "./User/Login",
        },
        {
          path: "/user/login/Forgotpassword",
          component: "./User/Login/ForgotPassword",
        },
        {
          path: "/user/login/Signup",
          component: "./User/Login/Signup",
        },
        {
          path: "/user/login/Resetpassword",
          component: "./User/Login/Resetpassword",
        },
        /*   {
              path: '/user/login/SettingSignup',
              component: './User/Login/SettingSignup',
              } */
      ],
    },

    {
      path: "/profile",
      // name: 'profile',
      icon: "profile",
      component: "./Profile/Profile",
    },
    {
      path: "/ProfileSettings",
      component: "./Profile/ProfileSettings",
    },
    {
      path: "/MyDetails",
      component: "./Profile/MyDetails",
    },
    {
      path: "/Verification",
      component: "./Profile/Verification",
    },
    {
      path: "/Password",
      component: "./Profile/Password",
    },
    {
      path: "/IBcode",
      component: "./Profile/IBcode",
    },
    {
      path: "/ProfileSettings",
      icon: "profile",
      name: "Profile Settings",
      component: "./Profile/ProfileSettings",
      access: "canClient",
    },

    {
      path: "/finops",
      name: "Transactions",
      icon: "dollar",
      access: "canClient",
      routes: [
        {
          path: "/finops",
          redirect: "/finops/deposit",
        },
        {
          path: "/finops/deposit",
          icon: "dollar",
          name: "Deposit",
          component: "./Finops/Deposit",
        },
        {
          path: "/finops/depositcard",
          component: "./Finops/DepositCard",
        },
        /*     {
              path: '/finops/Deposit_Cards/DepositCard_step1',
              component: './Finops/Deposit_Cards/DepositCard_step1'
            },
            {
              path: '/finops/Deposit_Cards/DepositCard_step2',
              component: './Finops/Deposit_Cards/DepositCard_step2'
            },
            {
              path: '/finops/Deposit_Cards/DepositCard_step3',
              component: './Finops/Deposit_Cards/DepositCard_step3'
            },
            {
              path: '/finops/Deposit_Cards/DepositCard_step4',
              component: './Finops/Deposit_Cards/DepositCard_step4'
            }, */
        {
          path: "/finops/deposittransfer",
          component: "./Finops/DepositTransfer",
        },
        {
          path: "/finops/paymentlink3",
          // name:'PaymentLink3',
          component: "./Finops/PaymentLink3",
        },
        {
          path: "/finops/withdrawcard",
          component: "./Finops/WithdrawCard",
        },
        {
          path: "/finops/withdrawtransfer",
          component: "./Finops/WithdrawTransfer",
        },
        {
          path: "/finops/DepositTable",
          component: "./Finops/DepositTable",
        },
        {
          path: "/finops/DepositTabs",
          component: "./Finops/DepositTabs",
        },

        {
          path: "/finops/withdraw",
          name: "Withdraw",
          icon: "dollar",
          component: "./Finops/Withdraw",
        },
        // {
        //   path: '/finops/wallet_transfer',
        //   name: 'wallet_transfer',
        //   component: './Finops/WalletTransfer',
        // },
        {
          path: "/finops/transaction_history",
          name: "Transaction History",
          component: "./Finops/TransactionHistory",
        },
        {
          path: "/finops/deposit_steps",
          // name: 'Deposit_Steps',
          component: "./Finops/Deposit_Steps",
        },
        {
          path: "/finops/deposit_transfer",
          // name: 'Deposit_T',
          component: "./Finops/Deposit_Transfer",
        },
      ],
    },
    {
      path: "/ib",
      name: "ib",
      icon: "user",
      component: "./IB/Dashboard",
      access: "canClient",
    },

    {
      path: "/",
      redirect: "/user/login",
    },
    {
      path: "*",
      layout: false,
      component: "./404",
    },
  ];

  const handleMenuClick = (event: any, menu: any, index:number) => {
    if (!menu.routes || menu?.routes.length == 0) {
        setMenuActive(menu.name + index);
    }
  };


  return (
    <>
      <aside id="mySidenav" className="sidenav">
        <div className="menu">
          {menu.length > 0 &&
            menu.map((menu, menuIndex) => {
              if (menu.name) {
                return (
                  <div className="menu-item" key={menuIndex}>
                    <button
                      data-bs-toggle="collapse"
                      data-bs-target={`#menu-${menuIndex}`}
                      onClick={(event) => handleMenuClick(event, menu, menuIndex)}
                      className="menu-item-btn"
                    >
                      <div
                        className={`main-menu ${(menuActive == (menu.name + menuIndex)) ? 'active' : ''}`}
                      >
                        <i className="fa fa-dashboard me-3 menu-icon"></i>
                        <span className="menu-title">{menu.name}</span>
                        {menu.routes && menu.routes?.length > 0 && (
                          <i className="fa fa-angle-down ms-auto angle-down-icon"></i>
                        )}
                      </div>
                    </button>
                    {menu.routes && menu.routes?.length > 0 && (
                      <div className="collapse" id={`menu-${menuIndex}`}>
                        <ul className="list-unstyled m-0 sub-menu-block">
                          {menu.routes?.map((submenu, submenuIndex) => {
                            if (submenu.name) {
                              return (
                                <li key={`${menuIndex}.${submenuIndex}`} className="sub-menu-list">
                                  <button onClick={(event) => handleMenuClick(event, submenu, submenuIndex)} className={`sub-menu ${menuActive == (submenu.name + submenuIndex) ? 'active' : ''}`}>
                                    <i className="fa fa-dashboard me-3 menu-icon"> </i>
                                    <span className="submenu-title">
                                      {submenu.name}
                                    </span>
                                    {/* <i className="fa fa-angle-down ms-auto"></i> */}
                                  </button>
                                </li>
                              );
                            }
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }
            })}
        </div>
      </aside>
    </>
  );
}

export default SideNav;
