import React from "react";
import { Link } from "react-router-dom";
import CourseInfoList from "../CourseInfoList";
import logo from "../../assest/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top-inner">
            <Link className="logo" to="/">
              <img className="logo__img" src={logo} alt="logotype" />
            </Link>
            <div className="course__info">
              <ul className="menu__list">
                <CourseInfoList />
              </ul>
            </div>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__list-item">
                  <Link className="menu__list-link" to="/about_us">
                    Про нас
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
