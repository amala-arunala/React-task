import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import bus from "../images/busIcon.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div
        className="nav-img"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/mainpage")}
      >
        <img
          src={bus}
          alt="bus"
          width="50px"
          height="50px"
          style={{ marginRight: "8px" }}
        />
        <h1 style={{ marginTop: "4px" }}>Online Bus Booking App</h1>
      </div>
      {location.pathname !== "/" && location.pathname !== "/register" ? (
        <>
          <NavLink
            to="/logout"
            className="nav-btn"
            onClick={() => {
              localStorage.setItem("currentUser", JSON.stringify({}));
            }}
          >
            Logout
          </NavLink>
          <NavLink to="/bookingDetails" className="nav-btn">
            My Bookings
          </NavLink>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
