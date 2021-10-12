import React from "react";
import "../App.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { GiChiliPepper } from "react-icons/gi";

function Item({ info }) {
  return (
    <li className="w-full flex flex-row">
      {/* <div className="food-item bg-gray-100 bg-opacity-60 rounded-lg flex w-full flex-row"> */}
      <div className="food-item flex w-full flex-row">
        {/* <div className="w-1/2">{info[0]}</div>
        <div className="flex flex-row w-1/4">
          {info[2] === "1" && (
            <RiCheckboxBlankCircleFill className="veg my-auto border text-sm border-black" />
          )}
          {info[2] === "0" && (
            <RiCheckboxBlankCircleFill className="nveg my-auto border text-sm border-black" />
          )}
          {info[1] === "1" && <GiChiliPepper className="chili ml-2 text-lg" />}
        </div>
        <div className="w-1/4">{info[3]}</div> */}

        <div className="flex flex-row w-3/4">
          <div className="">{info[0]}</div>
          <div className="flex flex-row ml-auto">
            {info[1] === "1" && (
              <GiChiliPepper className="chili my-auto text-lg" />
            )}
            {info[2] === "1" && (
              <RiCheckboxBlankCircleFill className="veg my-auto text-sm " />
            )}
            {info[2] === "0" && (
              <RiCheckboxBlankCircleFill className="nveg my-auto text-sm" />
            )}
          </div>
          {/* <div>{info[3]}</div> */}
          {/* <div className="text-xs text-gray-200">{info[4]}</div> */}
        </div>
        <div className="flex w-1/4">
          <div className="m-auto">&#8377; {parseFloat(info[3])}</div>
        </div>
      </div>
    </li>
  );
}

export default Item;
