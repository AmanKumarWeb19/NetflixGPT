import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuugesstions from "./GptMovieSuugesstions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuugesstions />
    </div>
  );
};

export default GptSearch;
