import React from "react";
import { useNavigate } from "react-router-dom";

export default function BaseApp({ children }) {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="baseContainer">
      <div className="sideBar">
        <div className="sideBarContent">
          <div className="sideBarTitle">
            <p>LIBRARY</p>
          </div>
          <hr></hr>
          <div className="sideBarOption">
            <p onClick={() => handleNavigation("/")} className="option">
              Dashboard
            </p>
          </div>
          <hr></hr>
          <div className="sideBarOption">
            <p onClick={() => handleNavigation("/book")} className="option">
              Books
            </p>
          </div>
          <hr></hr>
          <div className="sideBarOption">
            <p onClick={() => handleNavigation("/book/add")} className="option">
              Add Books
            </p>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="header">
          <i className="bx bx-user-circle bx-lg icon"></i>
        </div>
        <div className="content">
          <div className="content-div">{children}</div>
        </div>
        <div className="footer">Copyright © Sakthi 2023</div>
      </div>
    </div>
  );
}