import { getTrendingFilm } from "api/Search";
import { CardFilm } from "components/CardFilm/CardFilm";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List } from "./HomePage.styled";

const HomePage = () => {
  const [films, setFilms] = useState([])
  const [error, setError] = useState(false)
  
  const location = useLocation();

  useEffect(() => {    
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
        <List>
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
        </List>
      )}
    </>
  );
}
export default HomePage;

