import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // this function will search the movie in TMDB Database

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    //Make An Api Call to GPT APIand get Movie Results.

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 Movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Sholay, Golmaal, Chup Chup Ke";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);

    //"Hera Pheri, 3 Idiots, Andaz Apna Apna, Welcome, Dhamaal"

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //["Hera Pheri", "3 Idiots", "Andaz Apna Apna", "Welcome", "Dhamaal"]

    // For Each Movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    // promiseArray will give :- ["Promise","Promise","Promise","Promise","Promise"]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 col-span-3 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
