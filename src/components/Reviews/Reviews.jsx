import { getFilmReviews } from "api/Search";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List } from "./Reviews.styled";

const Reviews = () => {
 const [reviews, setReviews] = useState([]);
 const [error, setError] = useState(false);
 const params = useParams();
    const id = params?.movieId; 
    useEffect(() => {
        async function getData() {
            try {
                const data = await getFilmReviews(id);
                setReviews(data);
            } catch {
                setError(true);
            }
        }
        getData();
    })
return (
  <>
    {!error && (
      <List>
        {reviews?.map(review => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
    )}
  </>
);
};
export default Reviews;
