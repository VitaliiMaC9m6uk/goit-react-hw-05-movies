// import { Outlet } from "react-router-dom";

import { getDetailFilm } from "api/Search";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import defaultImg from '../../../img/default-image.jpg'
import { Container, Detail, Info } from "./DetailsFilm.styled";
const DetailsFilm = () => {
    const [film, setFilm] = useState([]);
    const [error, setError] = useState(false);
    const params = useParams();
    const id = params?.movieId;    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    useEffect(() => {
      async function getData() {
        try {
          const data = await getDetailFilm(id);
          setFilm(data);
        } catch {
          setError(true);
        }
      }
      getData();
    }, [id]);  
    return (
      <>
        {!error && (
          <Container>
            <Link to={backLinkLocationRef.current}>Back</Link>
            <Info>
              <img
                src={
                  film?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    : defaultImg
                }
                alt=""
              ></img>
              <Detail>
                <h2>{film.original_title}</h2>
                <p>{film.vote_average}</p>
                <h3>Overview</h3>
                <p>{film.overview}</p>
                <h4>Genres</h4>
                <ul>
                  {film?.genres?.length === 0 ? (
                    <p>No data available</p>
                  ) : (
                    film?.genres?.map(item => (
                      <li key={item.name}>
                        <p>{item.name}</p>
                      </li>
                    ))
                  )}
                </ul>
              </Detail>
            </Info>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </Container>
        )}
      </>
    );   
}
export default DetailsFilm;