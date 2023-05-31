import { getFindFilm } from "api/Search";
import { CardFilm } from "components/CardFilm/CardFilm";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Form, List } from "./MoviePage.styled";

const MoviePage = () => {
  const [film, setFilm] = useState([]);
  const [find, setFind] = useState('');
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = searchParams.get('movies');
  const location = useLocation();
  
    const hendlerChange = ({ target: { value } }) => {
        setFind(value);
  };
  
  useEffect(() => {
    if (!movies) {
      return;
    }
    async function getData() {
      try {
        const data = await getFindFilm(movies.trim().replace(' ', '%20'));
        setFilm(data.results);
      } catch {
        setError(true);
      }
    }
    getData();
  }, [movies]);
    const hendlerSubmit = e => {
    e.preventDefault();
    if (find.trim() === '') {
      return;
      }
    setSearchParams({ movies : e.target[0].value });    
    setFind('')
  };  
    return (
      <>
        <Form onSubmit={hendlerSubmit}>
          <label>Movie search</label>
          <input onChange={hendlerChange} value={find}></input>
          <button>Search</button>
        </Form>

        {!error && (
          <List>
            {film?.map(item => {
              return (
                <CardFilm
                  location={location}
                  key={item.id}
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
export default MoviePage;