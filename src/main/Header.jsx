import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="frame">
        <div className="one">
          <h1>UI/UX - 4 курс</h1>
        </div>
        <div className="two">
          <ul>
            <li>
              <Link to="/">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
            <li>
              <Link to="/task3">Task 3</Link>
            </li>
            <li>
              <Link to="/task4">Task 4</Link>
            </li>
          </ul>
        </div>

        <Outlet />
      </div>
    </>
  );
};
