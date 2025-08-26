import React from "react";
import { FaRegFlag } from "react-icons/fa";

const Players = ({ player }) => {
  const {
    banner_image,
    profile_image,
    name,
    country_name,
    playing_position,
    handed,
    player_price,
    button,
  } = player;
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-6">
      <img className="rounded-2xl " src={banner_image} alt="" />
      <div className="flex items-center gap-2 py-2">
        <img className="w-10 pt-4" src={profile_image} alt="" />
        <p>{name}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="flex items-center gap-2">
          <FaRegFlag />
          {country_name}
        </p>
        <p>{playing_position}</p>
      </div>

      <div className="flex justify-between py-2">
        <p>{handed}</p>
        <p className="text-gray-400">{handed}</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p className="font-bold">Price :${player_price}</p>
        <p className="border-2 border-gray-400 py-2 px-4 rounded-xl font-bold cursor-pointer">
          {button}
        </p>
      </div>
    </div>
  );
};

export default Players;
