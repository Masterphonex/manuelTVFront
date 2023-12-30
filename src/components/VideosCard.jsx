import React from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const VideosCard = ({ title, image, youtube, createdAt }) => {
  const createdAtDate = new Date(createdAt);

  // Options for displaying only year, month, and day
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the createdAt date with the specified options
  const formattedDate = createdAtDate.toLocaleDateString(undefined, options);

  return (
    <div className="w-[350px] h-[440px] overflow-hidden border border-white rounded-lg flex flex-col gap-10">
      <div className="h-[200px]">
        <img src={image} className="w-[350px] h-[270px]" />
      </div>
      <div className="text h-[200px] flex flex-col items-center mt-8">
        <h1 className="font-bold text-lg ">{title}</h1>
        <p className="text-sm mt-2">Click here to Watch Video</p>

        <div className="flex gap-5 mt-5">
          <a href={youtube} target="_blank">
            <button className="flex gap-2 items-center justify-center border border-white px-3 py-2 rounded-md">
              <BsYoutube />
              <p>Youtube</p>
            </button>
          </a>
          <button className="flex gap-2 items-center justify-center border border-white px-3 py-2 rounded-md">
            <BsInstagram />
            <p>Instagram</p>
          </button>
        </div>
        <h1 className="mt-3">Created at {formattedDate}</h1>
      </div>
    </div>
  );
};

export default VideosCard;
