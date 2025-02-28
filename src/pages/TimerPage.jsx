import Navbar from "../components/Navbar";
import { useContext, useEffect } from "react";

import { DarkModeContext } from "../contexts/DarkModeContext";
import "./TimerPage.css";
import Timer from "../components/Timer";
function TimerPage() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div
        className={`h-remaining grid place-content-center p-4 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="lg:px-[150px] max-w-[1000px] h-[400px] rounded-xl border border-red-500 shadow-custom">
          <div className="flex flex-col gap-[20%] items-center h-full">
            <div className=" h-[80px] pt-2 px-2">
              <h1 className=" tektur font-bold tracking-wider text-3xl lg:text-4xl m-1 gradient-red ">
                Code with timer, take breaks
              </h1>
              <div className="h-1 gradient-underline w-full rounded-3xl" />
            </div>

            {/* <div className="h-[312px] flex justify-center items-center w-full">
              <div
                className={`cutive px-4 py-2 rounded-2xl  hover:scale-[1.04] hover:cursor-pointer transition-all duration-[0.35s] ${
                  darkMode ? "bg-white text-black" : "bg-red-400 text-white"
                }`}
              >
                START TIMER
              </div>
            </div> */}

            <Timer />
            <button className="btn btn-success"> Stop timer</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TimerPage;
