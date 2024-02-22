import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-xl text-black p-4 px-12 bg-opacity-80 rounded-lg hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-xl text-white p-4 px-12 bg-opacity-80 hover:bg-opacity-60 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
