import React from "react";
import { FaRegFlag } from "react-icons/fa";

const Players = ({ player }) => {
  const {
    banner_image,
    profile_image,
    name,
    country_name,
    playing_position,
    batting_hand,
    player_price,
    button,
  } = player;
  return (
    <div>
      <img src={banner_image} alt="" />
      <div className="flex items-center">
        <img className="w-10" src={profile_image} alt="" />
        <p>{name}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center">
          <FaRegFlag />
          {country_name}
        </p>
        <p>{playing_position}</p>
      </div>

      <p>{batting_hand}</p>
      <p>{player_price}</p>
      <p>{button}</p>
    </div>
  );
};

export default Players;
