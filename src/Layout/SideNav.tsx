/* eslint-disable @typescript-eslint/no-explicit-any */

import { Popover } from "antd";
import { useState } from "react";
import { menu } from "../routes/menu";
import { DownOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

function SideNav(props) {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(null);
  const [menuList, setMenuList] = useState(menu);

  const isNavOpen = localStorage.getItem("isNavOpen");

  const handleMenuClick = (menu: any, index: number) => {
    if (!menu.routes || menu?.routes.length == 0) {
      setMenuActive(menu.name + index);
      navigate(menu.path);
    }
  };

  const renderPopupContent = (menu: any) => {
    if (menu.routes) {
      return (
        <div>
          {menu.routes.map((m: any) => (
            <NavLink className="navigation-link" key={m.name} to={m.path}>
              {m.name}
            </NavLink>
          ))}
        </div>
      );
    }
  };

  const handleMouseEnter = (index: number) => {
    const list = [...menuList];
    if (list[index]["routes"]) {
      list[index]["popup"] = true;
    }
    setMenuList(list);
  };

  const onPopoverChange = (visible: boolean, index: number) => {
    const list = [...menuList];
    list[index]["popup"] = false;
    setMenuList(list);
  };

  return (
    <>
      <aside id="sidenav" className="sidenav">
        <div className="menu">
          {menuList.length > 0 &&
            menuList.map((menu, menuIndex) => {
              if (menu.name) {
                return (
                  <div className="menu-item" key={menuIndex}>
                    <Popover
                      content={() => renderPopupContent(menu)}
                      trigger="hover"
                      placement="rightTop"
                      id={String(menuIndex)}
                      key={menuIndex}
                      open={(isNavOpen == "false" && menu.popup) || false}
                      onOpenChange={(visible: boolean) =>
                        onPopoverChange(visible, menuIndex)
                      }
                    >
                      <button
                        data-bs-toggle="collapse"
                        data-bs-target={`#menu-${menuIndex}`}
                        onClick={() => handleMenuClick(menu, menuIndex)}
                        className="menu-item-btn"
                        onMouseEnter={() => handleMouseEnter(menuIndex)}
                      >
                        <div
                          className={`main-menu ${
                            menuActive == menu.name + menuIndex ? "active" : ""
                          }`}
                        >
                          <span className="me-3 menu-icon">
                            <menu.icon />
                          </span>
                          <span className="menu-title">{menu.name}</span>
                          {menu.routes && menu.routes?.length > 0 && (
                            <span className="ms-auto angle-down-icon">
                              <DownOutlined />
                            </span>
                          )}
                        </div>
                      </button>
                    </Popover>
                    {menu.routes && menu.routes?.length > 0 && (
                      <div className="collapse" id={`menu-${menuIndex}`}>
                        <ul className="list-unstyled m-0 sub-menu-block">
                          {menu.routes?.map(
                            (submenu: any, submenuIndex: any) => {
                              if (submenu.name) {
                                return (
                                  <li
                                    key={`${menuIndex}.${submenuIndex}`}
                                    className="sub-menu-list"
                                  >
                                    <button
                                      onClick={() =>
                                        handleMenuClick(submenu, submenuIndex)
                                      }
                                      className={`sub-menu ${
                                        menuActive ==
                                        submenu.name + submenuIndex
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <span className="me-3 menu-icon">
                                        {<submenu.icon />}
                                      </span>
                                      <span className="submenu-title">
                                        {submenu.name}
                                      </span>
                                      {/* <i className="fa fa-angle-down ms-auto"></i> */}
                                    </button>
                                  </li>
                                );
                              }
                            }
                          )}
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
