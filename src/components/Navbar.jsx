import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../utils/newRequest";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
     const navigate  = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = async () => {
    try {
      await newRequest.post('/auth/logout')
      localStorage.removeItem("currentUser");
navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Bivver</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
  
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src={currentUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" onClick={handleLogout}>
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link className="link" to="/login">
                <span>Sign in</span>
              </Link>

              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">

           <Link className="link menuLink" to="/gigs?cat=gDesign">
            <span>Graphics & Design</span>
            </Link>
            <Link className="link menuLink" to="/gigs?cat=wDevelopment">
            <span>Web Development</span>
            </Link>
            <Link className="link menuLink" to="/gigs?cat=sDevelopment">
            <span>Software Development</span>
            </Link>
            <Link className="link menuLink" to="/gigs?cat=vAnimation">
            <span>Video & Animation</span>
            </Link>
            <Link className="link menuLink" to="/gigs?cat=dMarketing">
            <span>Digital Marketing</span>
            </Link>     

          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;