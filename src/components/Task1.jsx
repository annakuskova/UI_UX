import { React, useState } from "react";
import minus from "../min.svg";
import plus from "../pl.svg";
import '../main/Header.css';

export const Task1 = () => {
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

  return <>
    <div className="count">
          <div className="tree">
            <p className="four">Счетчик</p>
            <p>{pad(count)}</p>
            <div>
              <button onClick={onClickMinus} className="Btn min">
                <img src={minus} alt="minus" />
              </button>
              <button onClick={onClickPlus} className="Btn pl">
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
        </div>
  </>;
};
