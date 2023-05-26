import { getTrendingFilm } from "api/Search";
import { CardFilm } from "components/CardFilm/CardFilm";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [films, setFilms] = useState([])
  const [error, setError] = useState(false)
  
  const location = useLocation();

  useEffect(() => {
    // getTrendingFilm().then(data => setFilms([...data.results]))
    //   .catch(error => {
    //     setError({ error })
    //   }, []);
    async function getData() {
      try {
        const data = await getTrendingFilm();
        setFilms(data);
      } catch {
        setError(true)
      }
    }
    getData();
  }, []);  
 

  return (
    <>
      {!error && (
        <ul>
          {films?.map(item => {
            return (
              <CardFilm
                location={location}
                key={item.original_title}
                title={item.original_title}
                url={item.poster_path}
                activeId={item.id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
export default HomePage;

