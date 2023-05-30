import { getFilmCast } from "api/Search";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImgCast from "../../img/default-image.jpg"
import { Img, List, ListElement } from "./Cast.styled";


const Cast = () => {
    const [actors, setActors] = useState([])
    const [error, setError] = useState(false);
    const params = useParams();
    const id = params?.movieId;
    useEffect(() => {
      async function getData() {
        try {
          const data = await getFilmCast(id);
          setActors(data);
        } catch {
          setError(true);
        }
      }
      getData();
    }, [id]);
    return (
      <>
        {!error && (
          <List>
            {actors?.map(actor => (
              <ListElement key={actor.id}>
                <Img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : defaultImgCast
                  }
                  alt=""
                ></Img>
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </ListElement>
            ))}
          </List>
        )}
      </>
    ); 
}
export default Cast;