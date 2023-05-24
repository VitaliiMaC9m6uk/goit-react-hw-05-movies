import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Header from "./Header/Header";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />}>
          <Route path=":movieId">
            <Route path="cast" />
            <Route path="reviews" />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
