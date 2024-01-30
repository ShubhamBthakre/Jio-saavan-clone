import React from "react";
import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { LuHardDriveDownload } from "react-icons/lu";
import { HiSpeakerWave } from "react-icons/hi2";

function Player() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#f5f5f5ff] flex flex-col">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step={0.1}
        value={0}
        className="w-full h-5 text-green-400 range"
      />
      <div className="flex justify-between items-center mt-3">
        {/* 1st div */}

        <div className="flex  items-center gap-3">
          <img
            src="https://c.saavncdn.com/274/Rockstar-2011-50x50.jpg"
            alt=""
            srcset=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidden lg:block">
            <span>Lorem, ipsum.</span>
            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 items-center">
          <BiRepeat className="text-gray-400  hover:text-gray-500 cursor-pointer" />
          <IoMdSkipBackward className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <FaPlay className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <IoMdSkipForward className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <PiShuffleBold className="text-gray-400  hover:text-gray-500 cursor-pointer" />
        </div>

        {/* 3rd div */}
        <div className="flex items-center justify-end ">
          <LuHardDriveDownload className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer lg:mr-2" />
          <HiSpeakerWave className="text-gray-700 hover:text-gray-500 text-2xl lg:text-3xl cursor-pointer lg:mr-2" />
        </div>
      </div>
    </div>
  );
}

export default Player;
