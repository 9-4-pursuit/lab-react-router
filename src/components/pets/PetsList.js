import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const PetsList = ({ pets, petType }) => {

  let navigate = useNavigate();

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  useEffect(() => {
    if (!petType) {
      navigate("/pets/cats")
    }
  })

  function catOrDog() {
    return (petType === "cat") ? cats : dogs;
  }

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* Specific pet section */}
        {(catOrDog().map((pet) => (
          <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
        )))}
      </section>
    </section>
  );
};

export default PetsList;
