import React from "react";
import backgroundImage from "../assets/bg-shadow.png";
import BannerMain from "../assets/banner-main.png";
const Banner = ({ handleCollectCoin }) => {
  return (
    <div
      className="mt-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "24px",
      }}
    >
      <div className="flex flex-col items-center text-center gap-6 pt-16 pb-16 pr-48 pl-48 ">
        <img src={BannerMain} alt="" />

        <h1 className="text-5xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-medium text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleCollectCoin}
          className="font-bold text-xl bg-orange-300 px-4 py-5 rounded-2xl border-8 cursor-pointer"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
