import React, { useState } from "react";
import "./Header.css";
import minus from '../min.svg';
import plus from '../pl.svg';

export const Header = () => {
  const [count, setCount] = useState(0);
  const onClickPlus = () => {
    setCount(count + 1);
    console.log(count);
  };

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  function pad(num) {
    num = num.toString();
    while (num.length < 2) num = "0" + num;
    return num;
  }

  return (
    <>
      <div className="frame">
        <div className="one">
          <h1>UI/UX - 4 курс</h1>
        </div>
            <div className="two">
          <ul>
            <li>
              <a href="#">Задание 1</a>
            </li>
            <li>
              <a href="#">Задание 2</a>
            </li>
            <li>
              <a href="#">Задание 3</a>
            </li>
            <li>
              <a href="#">Задание 4</a>
            </li>
          </ul>
      </div>
          <div className="count">
            <div className="tree">
          <p className="four">Счетчик</p>
            <p>{pad(count)}</p>
            <div>
              <button onClick={onClickMinus} className="Btn min">
                <img src={minus} alt="minus" />
              </button>
              <button onClick={onClickPlus} className="Btn pl">
                <img src={plus} alt='plus' />
              </button>
            </div>
          </div>
        </div>
        </div>
          
    </>
  );
};
