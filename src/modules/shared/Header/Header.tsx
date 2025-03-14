import React from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import "./Header.scss";

const isCurrentPage = ({ isActive }: { isActive: boolean }) =>
  cn("menu__link", {
    active: isActive,
  });

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          Obre
        </Link>

        <nav className="header__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to="dashboard" className={isCurrentPage}>
                Dashboard
              </NavLink>
            </li>

            <li className="menu__item">
              <NavLink to="profile" className={isCurrentPage}>
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
