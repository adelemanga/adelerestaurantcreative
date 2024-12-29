import { useQuery } from "@apollo/client";
import { GET_FOODS } from "../../graphql/queries";

function FoodList() {
  const { loading, error, data } = useQuery(GET_FOODS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="list">
      <h2>Vos plats</h2>
      <ul className="liste">
        {data.foods.map((food: any) => (
          <li className="liste1" key={food.id}>
            <p className="foodName">{food.name}</p>
            <div className="gallery">
              <a href={food.imgUrl} target="_blank" rel="noopener noreferrer">
                <img className="img-food" src={food.imgUrl} alt="image" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
