import { useState } from "react";

const BackgroundColors = () => {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setBgColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setBgColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setBgColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setBgColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 px-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={() => setBgColor("gray")}
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
};
export default BackgroundColors;
