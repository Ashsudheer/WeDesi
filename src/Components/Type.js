import React, { useState, useEffect } from "react";
import Item from "./Item";
import "../App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Type(props) {
  const [display, setDisplay] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  const toggle = () => {
    setDisplay(!display);
    console.log(display);
  };

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  useEffect(() => {
    if (props.info === undefined) return;
    var list = [];
    var veg = 0;
    for (var i = 0, max = props.info.length; i < max; i++) {
      // console.log(props.info[i]);
      var arr = [
        props.info[i]["name"],
        props.info[i]["spicy"],
        props.info[i]["veg"],
        props.info[i]["price"],
        props.info[i]["desc"],
      ];
      if (arr[2] === "1") veg++;
      // list.push(arr);
      if (!(props.veg && arr[2] === "0"))
        list.push(<Item key={arr[0]} info={arr} />);
    }
    setItems(list);
    setCount(veg);
  }, [props.info, props.veg]);

  const Content = () => {
    if (!display) return null;
    return (
      <div className="">
        <ul>{items}</ul>
      </div>
    );
  };

  const Dis = () => {
    if (props.veg && count === 0) return null;
    return (
      <div id={props.type} className="flex flex-col mx-2 my-2">
        <div
          className="flex flex-row type py-1 px-2 font-semibold"
          onClick={toggle}
        >
          <div className="text-lg">{props.type}</div>
          {!display && (
            <IoIosArrowDropdownCircle className="ml-auto my-auto text-xl" />
          )}
          {display && (
            <IoIosArrowDropdownCircle
              className="ml-auto my-auto text-xl"
              style={{ transform: "rotate(180deg)" }}
            />
          )}
        </div>
        <Content />
      </div>
    );
  };

  return (
    // <div className="flex flex-col mx-2 my-2">
    //   <div
    //     className="flex flex-row type py-1 px-2 font-semibold"
    //     onClick={toggle}
    //   >
    //     <div className="text-lg">{props.type}</div>
    //     {!display && (
    //       <IoIosArrowDropdownCircle className="ml-auto my-auto text-xl" />
    //     )}
    //     {display && (
    //       <IoIosArrowDropdownCircle
    //         className="ml-auto my-auto text-xl"
    //         style={{ transform: "rotate(180deg)" }}
    //       />
    //     )}
    //   </div>
    //   <Content />
    // </div>
    <Dis />
  );
}

export default Type;
