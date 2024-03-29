import { Link } from "react-router-dom";
import * as PetService from "../../services/PetService";

const PetCard = ({ pet }) => {
  return (
    <li className="otherPet">
      <h3>{pet.name}</h3>
      <p>{pet.type}</p>

      <p className="img">
        <img src={pet.imageUrl} />
      </p>
      <Link className="button" to="#">
        Details
      </Link>
    </li>
  );
};

export default PetCard;
