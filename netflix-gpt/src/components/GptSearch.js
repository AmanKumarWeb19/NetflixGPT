import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuugesstions from "./GptMovieSuugesstions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover fixed"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div className="relative">
        <GptSearchBar />
        <GptMovieSuugesstions />
      </div>
    </div>
  );
};

export default GptSearch;
