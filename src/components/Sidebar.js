import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeSubMenu, setactiveSubMenu] = useState("");
  const [activeMenu, setactiveMenu] = useState("");

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <Link to="/">
            <h1>Edxplor Management System</h1>
          </Link>
        </div>
        <div className="menus">
          <div className="menu_heading">
            <h3>Master Data</h3>
          </div>
          <div className="menu_list">
            {/*////////////////////////// academic menu   //////////////////////       */}
            <div
              className={
                activeMenu === "academic"
                  ? "menu_container active"
                  : "menu_container"
              }
              id="menuContainer"
            >
              <div className="menu">
                <img
                  src="/images/icon/academic.svg"
                  alt=""
                  className={
                    activeMenu === "academic" ? "icon1 " : "icon1 active"
                  }
                  id="icon1"
                />
                <img
                  src="/images/icon/academic-primary.svg"
                  alt=""
                  className={
                    activeMenu === "academic" ? "icon1 active" : "icon1 "
                  }
                  id="icon1-primary"
                />

                <p>Academic</p>
                <img
                  src="/images/icon/uparrow.svg"
                  alt=""
                  className={
                    activeMenu === "academic" ? "uparrow active" : "uparrow "
                  }
                  id="upArrow"
                  onClick={() => {
                    setactiveMenu("");
                  }}
                />
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className={
                    activeMenu === "academic" ? "downarrow" : "downarrow active"
                  }
                  id="downArrow"
                  onClick={() => {
                    setactiveMenu("academic");
                  }}
                />
              </div>
              <div className="sub_menus">
                <Link to="/level">
                  <div
                    className={
                      activeSubMenu == "levels"
                        ? "sub_menu active"
                        : "sub_menu "
                    }
                    id="levels"
                    onClick={() => {
                      setactiveSubMenu("levels");
                    }}
                  >
                    Levels
                  </div>
                </Link>

                <Link to="/university">
                  <div
                    className={
                      activeSubMenu == "universities"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="universities"
                    onClick={() => {
                      setactiveSubMenu("universities");
                    }}
                  >
                    Universities
                  </div>
                </Link>

                <Link to="/boards">
                  <div
                    className={
                      activeSubMenu == "boards" ? "sub_menu active" : "sub_menu"
                    }
                    id="boards"
                    onClick={() => {
                      setactiveSubMenu("boards");
                    }}
                  >
                    Boards
                  </div>
                </Link>

                <Link to="/faculties">
                  <div
                    className={
                      activeSubMenu == "faculties"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="faculties"
                    onClick={() => {
                      setactiveSubMenu("faculties");
                    }}
                  >
                    Faculties
                  </div>
                </Link>

                <Link to="/programs">
                  <div
                    className={
                      activeSubMenu == "programs"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="programs"
                    onClick={() => {
                      setactiveSubMenu("programs");
                    }}
                  >
                    Programs
                  </div>
                </Link>
              </div>
            </div>

            {/* //////////////////////////////// location Menu /////////////////////////// */}
            <div
              className={
                activeMenu === "location"
                  ? "menu_container active"
                  : "menu_container"
              }
            >
              <div className="menu">
                <img
                  src="/images/icon/location.svg"
                  alt=""
                  className={
                    activeMenu == "location" ? "icon1 " : "icon1 active"
                  }
                />
                <img
                  src="/images/icon/location-primary.svg"
                  alt=""
                  className={
                    activeMenu == "location" ? "icon1 active" : "icon1 "
                  }
                />
                <p> Location</p>
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className={
                    activeMenu == "location" ? "downarrow " : "downarrow active"
                  }
                  onClick={() => {
                    setactiveMenu("location");
                  }}
                />
                <img
                  src="/images/icon/uparrow.svg"
                  alt=""
                  className={
                    activeMenu == "location" ? "uparrow active" : "uparrow "
                  }
                  id="upArrow"
                  onClick={() => {
                    setactiveMenu("");
                  }}
                />
              </div>
              <div className="sub_menus">
                <Link to="/country">
                  <div
                    className={
                      activeSubMenu == "country"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="country"
                    onClick={() => {
                      setactiveSubMenu("country");
                    }}
                  >
                    Country
                  </div>
                </Link>

                <Link to="/province">
                  <div
                    className={
                      activeSubMenu == "province"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="province"
                    onClick={() => {
                      setactiveSubMenu("province");
                    }}
                  >
                    Province
                  </div>
                </Link>

                <Link to="/district">
                  <div
                    className={
                      activeSubMenu == "district"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="district"
                    onClick={() => {
                      setactiveSubMenu("district");
                    }}
                  >
                    District
                  </div>
                </Link>

                <Link to="/localBodyType">
                  <div
                    className={
                      activeSubMenu == "localBodyType"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="localBodyType"
                    onClick={() => {
                      setactiveSubMenu("localBodyType");
                    }}
                  >
                    Local Body Type
                  </div>
                </Link>

                <Link to="/localBody">
                  <div
                    className={
                      activeSubMenu == "localBody"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="localBody"
                    onClick={() => {
                      setactiveSubMenu("localBody");
                    }}
                  >
                    Local Body
                  </div>
                </Link>
              </div>
            </div>
            <svg
              width="225"
              height="1"
              viewBox="0 0 225 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="-4.37114e-08"
                y1="0.5"
                x2="225"
                y2="0.49998"
                stroke="#DEE2E6"
              />
            </svg>
            {/* ////////////////// Role management menu //////////////////////// */}
            <div
              className={
                activeMenu === "roleManagement"
                  ? "menu_container active"
                  : "menu_container"
              }
              id="menuContainer"
            >
              <div className="menu">
                <img
                  src="/images/icon/role.svg"
                  alt=""
                  className={
                    activeMenu === "roleManagement" ? "icon1 " : "icon1 active"
                  }
                  id="icon1"
                />
                <img
                  src="/images/icon/role-primary.svg"
                  alt=""
                  className={
                    activeMenu === "roleManagement" ? "icon1 active" : "icon1 "
                  }
                  id="icon1-primary"
                />

                <p>Role Management</p>
                <img
                  src="/images/icon/uparrow.svg"
                  alt=""
                  className={
                    activeMenu === "roleManagement"
                      ? "uparrow active"
                      : "uparrow "
                  }
                  id="upArrow"
                  onClick={() => {
                    setactiveMenu("");
                  }}
                />
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className={
                    activeMenu === "roleManagement"
                      ? "downarrow"
                      : "downarrow active"
                  }
                  id="downArrow"
                  onClick={() => {
                    setactiveMenu("roleManagement");
                  }}
                />
              </div>
              <div className="sub_menus">
                <Link to="/students">
                  <div
                    className={
                      activeSubMenu == "students"
                        ? "sub_menu active"
                        : "sub_menu "
                    }
                    id="students"
                    onClick={() => {
                      setactiveSubMenu("students");
                    }}
                  >
                    Students
                  </div>
                </Link>

                <Link to="/colleges">
                  <div
                    className={
                      activeSubMenu == "colleges"
                        ? "sub_menu active"
                        : "sub_menu"
                    }
                    id="colleges"
                    onClick={() => {
                      setactiveSubMenu("colleges");
                    }}
                  >
                    Colleges
                  </div>
                </Link>
              </div>
            </div>
            <div className="menu_container">
              <div className="menu">
                <img src="/images/icon/location.svg" alt="" />
                <p> Location</p>
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className="downarrow active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="menu_icon">
          <img src="/images/icon/menu.svg" alt="" />
        </div>
        <div className="row-end last">
          <form>
            <input type="text" placeholder="Search" />
            <img src="images/icon/search.svg" alt="" className="searchIcon" />
          </form>
          <div className="profile">
            <img src="/images/profile.png" alt="" />
          </div>
          <div className="language">EN</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
