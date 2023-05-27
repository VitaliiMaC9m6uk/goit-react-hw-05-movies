import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import Header from "./Header/Header";
import DetailsFilm from "./pages/DetailsFilm/DetailsFilm";

export const App = () => {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId" element={<DetailsFilm />}>
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
