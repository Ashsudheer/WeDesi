import React, { useEffect, useState } from "react";
import "./App.css";
import Papa from "papaparse";
import logo from "./images/Logo.png";
import img1 from "./images/bg-elem3.png";
import Type from "./Components/Type";
import { Link } from "react-scroll";

function App() {
  // const [data, setData] = useState([]);
  const [sort, setSort] = useState({});
  const [types, setTypes] = useState([]);
  const [veg, setVeg] = useState(false);
  const [menu, setMenu] = useState(false);
  var sorted = {};

  const toggle = () => {
    setVeg(!veg);
    // console.log(veg);
  };

  // useEffect(() => {
  //   // console.log(data);
  //   console.log(sort);
  // }, [sort]);

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLVa_XJg7juISPoVIRTz-_VomvyaF07xEcDnSj8T6UKUB7cA28KgxSLNeSp3thdw4wyxU8fFu3Ybc-/pub?gid=0&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: function (results) {
          // setData(results.data);
          var arr = results.data;
          var set = [];
          for (var i = 0, max = arr.length; i < max; i++) {
            if (sorted[arr[i].type] === undefined) {
              sorted[arr[i].type] = [];
              set.push(arr[i].type);
            }
            sorted[arr[i].type].push(arr[i]);
          }
          if (Object.keys(sort).length === 0) setSort(sorted);
          if (types.length === 0) setTypes(set);
        },
      }
    );
  }, []);

  const Menu = () => {
    var out = [];
    for (var i = 0, max = types.length; i < max; i++) {
      if (i === 0) {
        out.push(
          <div className="my-2 ">
            <Link
              to="start"
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              {types[i]}
            </Link>
          </div>
        );
      } else {
        out.push(
          <div className="my-2 border-t bord">
            <Link
              to={types[i - 1]}
              spy={true}
              smooth={true}
              onClick={() => setMenu(!menu)}
            >
              {types[i]}
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="flex flex-col browse mx-auto my-2 w-1/2  text-center">
        <div
          onClick={() => setMenu(!menu)}
          className="px-4 py-2 text-normal menu font-bold rounded-full"
        >
          Browse Menu
        </div>
        {menu && (
          <div className="text-normal font-bold menu-item rounded-lg p-1">
            {out}
          </div>
        )}
      </div>
    );
  };

  const Display = () => {
    var out = [];
    for (var i = 0, max = types.length; i < max; i++) {
      // console.log(types[i]);
      // console.log(sort[types[i]]);
      out.push(
        <Type key={types[i]} type={types[i]} info={sort[types[i]]} veg={veg} />
      );
    }
    return out;
  };

  return (
    <div className="container flex flex-col">
      <img className="element1 object-contain" src={img1} alt="" />
      <div className="flex justify-center">
        <img className="m-5 h-16 object-contain" src={logo} alt="" />
      </div>
      <div className="title flex mx-auto mb-2 text-center">
        <h1 className="px-5 py-2 text-3xl font-semibold">Menu</h1>
      </div>
      <div className="flex ml-auto mr-2">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div
              className="block out w-10 h-6 rounded-full"
              onClick={toggle}
            ></div>
            <div
              className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"
              onClick={toggle}
            ></div>
          </div>
          <div
            id="start"
            className="ml-3 font-bold"
            style={{ color: "#008277" }}
          >
            Veg
          </div>
        </label>
      </div>
      <Menu />
      <Display />
    </div>
  );
}

export default App;
