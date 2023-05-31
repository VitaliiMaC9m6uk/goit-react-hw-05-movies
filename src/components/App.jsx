import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Header = lazy(() => import('./Header/Header'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const DetailsFilm = lazy(() => import('../pages/DetailsFilm/DetailsFilm'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviePage />} />
            <Route path="movies/:movieId" element={<DetailsFilm />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
