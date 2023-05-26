import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviePage />}>
          <Route path=":movieId">
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
