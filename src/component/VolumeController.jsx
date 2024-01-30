import React from "react";

function VolumeController({ isVolumeControllerVisible }) {
  return (
    <div
      className={`w-[80px] absolute -rotate-90 bottom-20  -right-3 shadow-md px-2 rounded-lg bg-white ${isVolumeControllerVisible ? " " : "hidden"}`}
    >
      <input
        type="range"
        name=""
        id=""
        min={0}
        max={100}
        step={0.1}
        value={0}
        className="h-2 text-green-400   "
      />
    </div>
  );
}

export default VolumeController;
