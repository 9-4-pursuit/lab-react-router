import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
export const PetsList = ({ pets, typePet }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const navigate = useNavigate()
    //we want the state change and the new state to render we will useEffect -- we want this to push the render upfront. this will avoid the delayed responses "juan"
  useEffect(() => {
    if (!typePet) {
      navigate("/pets/cats")
    }
  })

  function catDog() {
    return(typePet === "cats") ? cats : dogs;
  }
// this was tricky doing the filter and deleting the dogs info -- to then only include mapping through pets -- had to remember to convert to lowercase
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {catDog().map((pet) => (
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
        ))}
      </section>
    </section>
  );
};

export default PetsList;
