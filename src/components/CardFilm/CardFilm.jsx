import { Link } from "react-router-dom";
import defaultImg from '../../img/default-image.jpg'

export const CardFilm = ({ url, title, activeId, location }) => {    
    return (
    <li >
      <Link to={`/movies/${activeId}`} state={{ from: location }}>
        <img
          
          src={
            url !== null ? `https://image.tmdb.org/t/p/w500${url}` : defaultImg
          }
          alt={title}
        />
        <h2 >{title}</h2>
      </Link>
    </li>
  );
};

