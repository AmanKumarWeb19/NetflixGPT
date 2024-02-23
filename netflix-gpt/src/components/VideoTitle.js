import React from "react";

const VideoTitle = ({ title, overview }) => {
  console.log({ title, overview });
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-3xl md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-xl text-black py-1 md:py-4 px-4 md:px-12 bg-opacity-80 rounded-lg hover:bg-opacity-60">
          ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-xl text-white p-4 px-12 bg-opacity-80 hover:bg-opacity-60 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
