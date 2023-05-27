import { getFindFilm } from "api/Search";
import { CardFilm } from "components/CardFilm/CardFilm";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { List } from "./MoviePage.styled";

const MoviePage = () => {
    const [film, setFilm] = useState([]);
    const [find, setFind] = useState('');
    const [error, setError] = useState(false);
    const location = useLocation();

    const hendlerChange = ({ target: { value } }) => {
        setFind(value);
    };

    const hendlerSubmit = e => {
    e.preventDefault();
    if (find.trim() === '') {
      return;
    }
    async function getData() {
      try {
        const data = await getFindFilm(find.trim().replace(' ', '%20'));
        setFilm(data.results);
      } catch {
        setError(true);
      }
    }
    getData();
    setFind('')
  };
    
    return (
      <>
        <form onSubmit={hendlerSubmit}>
          <label>Movie search</label>
          <input onChange={hendlerChange} value={find}></input>
          <button>Search</button>
        </form>

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