import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link to="/gigs?cat=gDesign">
            <span>Graphics & Design</span>
            </Link>
            <Link to="/gigs?cat=wDevelopment">
            <span>Web Development</span>
            </Link>
            <Link to="/gigs?cat=sDevelopment">
            <span>Software Development</span>
            </Link>
            <Link to="/gigs?cat=vAnimation">
            <span>Video & Animation</span>
            </Link>
            <Link to="/gigs?cat=dMarketing">
            <span>Digital Marketing</span>
            </Link>     
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
         
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>        
          
          </div>
          <div className="item">
            <h2>More From Biverr</h2>
            <span>Biverr Business</span>
            <span>Biverr Pro</span>
            <span>Biverr Logo Maker</span>
            <span>Biverr Guides</span>    
     
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>© Biverr International Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
