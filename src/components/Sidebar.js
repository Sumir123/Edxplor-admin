import React from "react";

const Sidebar = () => {
  const showMenu = () => {
    const menuContainer = document.querySelector("#menuContainer");
    const upArrow = document.querySelector("#upArrow");
    const downArrow = document.querySelector("#downArrow");
    const icon1 = document.querySelector("#icon1");
    const icon1Primary = document.querySelector("#icon1-primary");

    menuContainer.classList.add("active");
    downArrow.classList.remove("active");
    upArrow.classList.add("active");
    icon1.classList.remove("active");
    icon1Primary.classList.add("active");
  };
  const hideMenu = () => {
    const menuContainer = document.querySelector("#menuContainer");
    const upArrow = document.querySelector("#upArrow");
    const downArrow = document.querySelector("#downArrow");
    const icon1 = document.querySelector("#icon1");
    const icon1Primary = document.querySelector("#icon1-primary");

    menuContainer.classList.remove("active");
    downArrow.classList.add("active");
    upArrow.classList.remove("active");
    icon1.classList.add("active");
    icon1Primary.classList.remove("active");
  };
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <h1>Edxplor Management System</h1>
        </div>
        <div className="menus">
          <div className="menu_heading">
            <h3>Master Data</h3>
          </div>
          <div className="menu_list">
            <div className="menu_container active" id="menuContainer">
              <div className="menu">
                <img
                  src="/images/icon/academic.svg"
                  alt=""
                  className="icon1"
                  id="icon1"
                />
                <img
                  src="/images/icon/academic-primary.svg"
                  alt=""
                  className="icon1 active"
                  id="icon1-primary"
                />

                <p>Academic</p>
                <img
                  src="/images/icon/uparrow.svg"
                  alt=""
                  className="uparrow active"
                  id="upArrow"
                  onClick={hideMenu}
                />
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className="downarrow "
                  id="downArrow"
                  onClick={showMenu}
                />
              </div>
              <div className="sub_menus">
                <div className="sub_menu active">Levels</div>
                <div className="sub_menu">Universities</div>
                <div className="sub_menu">Boards</div>
                <div className="sub_menu">Faculties</div>
                <div className="sub_menu">Programs</div>
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

            <div className="menu_container ">
              <div className="menu">
                <img src="/images/icon/role.svg" alt="" />
                <p> Role Management</p>
                <img
                  src="/images/icon/down.svg"
                  alt=""
                  className="downarrow active"
                />
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
      <div className="menu-name_section">
        <div className="menu-name">
          <p>Academic</p>
          <div className="row-end menu-last">
            <p className="link">Back to list</p>
            <div className="line">
              <svg
                width="1"
                height="24"
                viewBox="0 0 1 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.5"
                  y1="2.18557e-08"
                  x2="0.499999"
                  y2="24"
                  stroke="#DEE2E6"
                />
              </svg>
            </div>
            <div className="info_icon">
              <img src="/images/icon/info.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
