import React, { useEffect, useState } from "react";
import "./App.css";
import Papa from "papaparse";
// import logo from "./images/Logo Round.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import Type from "./Components/Type";
import { Link } from "react-scroll";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";

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
      <div className="flex flex-col browse mx-auto object-contain">
        {menu && (
          <div className="text-normal font-bold menu-item rounded-lg p-1">
            {out}
          </div>
        )}
        <div
          onClick={() => setMenu(!menu)}
          className="px-5 py-3 text-normal menu font-bold rounded-full"
        >
          <GiKnifeFork className="my-auto text-2xl" />
        </div>
      </div>
    );
  };
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
    <div>
      <div className="overflow-visible container flex flex-col">
        <img className="element1 object-contain z-10" src={img1} alt="" />
        <img className="element2 object-contain z-10" src={img2} alt="" />
        {/* <img className="element3 object-contain z-10" src={img2} alt="" /> */}
        <img className="element4 object-contain z-10" src={img2} alt="" />
        <img className="element5 object-contain z-10" src={img3} alt="" />
        <div className="container flex flex-col" style={{ height: "100vh" }}>
          <div className="title z-20">
            <h1 style={{ color: "#ffc56a" }}>WE</h1>
            <h1 id="hindi" style={{ marginTop: "5px", color: "#ff7948" }}>
              देसी
            </h1>
            <h1 style={{ color: "#d11100" }}>DHABA</h1>
            <h2 style={{ color: "cornsilk" }}>&bull; Kannur &bull;</h2>
          </div>
          <div class="container1 object-contain">
            <div class="field">
              <div class="scroll">
                <IoIosArrowDropdownCircle className="icon-scroll m-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <h1 className="head m-auto my-5">MENU</h1>
        </div>
        <div className="flex ml-auto mr-2">
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            {/* <div
              id="start"
              className="mr-3 font-bold"
              style={{ color: "#ffc56a" }}
            >
              Veg
            </div> */}
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
              className="ml-3 mr-2 font-bold"
              style={{ color: "#008378" }}
            >
              Veg
            </div>
          </label>
        </div>
        {/* <Menu className="z-30" /> */}
        <div class="list">
          <Display />
        </div>
      </div>
    </div>
  );
}

export default App;
