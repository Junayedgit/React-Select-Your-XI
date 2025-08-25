import React from "react";
import logo from "../assets/logo.png";
import { CiBitcoin } from "react-icons/ci";

const Header = ({ coin }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-8 items-center">
        <ul className="flex gap-4 font-normal">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        <a className="bg-white border-2 border-gray-100 px-4 py-5 rounded-xl cursor-pointer font-bold flex items-center gap-2">
          {coin} Coin <CiBitcoin className="text-2xl text-amber-500" />
        </a>
      </div>
    </div>
  );
};

export default Header;
