import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies(); //custom hooks creating in hooks folder
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
