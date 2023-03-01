import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, kind }) => {
  const animal = pets.filter(pet => pet.kind === kind);
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {
          kind === "cat"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : kind === "dog"
            ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
            : null
        }

        {/* All pets */}
        {/* {animal.map((pet) => {
          <Pet key={pet.id} kind={pet.kind} pet={pet} />
        })} */}

        {/* All cats section */}
        {/* {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} */}

        {/* All dogs section */}
        {/* {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))} */}
      </section>
    </section>
  );
};

export default PetsList;
