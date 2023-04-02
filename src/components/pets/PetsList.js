import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets }) => {
  const navigate = useNavigate();
  let { kind } = useParams();
  console.log(kind);
  //

  useEffect(() => {
    if (!kind) {
      navigate('/pets/cats')
    } else if (kind !== 'cats' && kind !== 'dogs' && kind) {
      navigate('/error')
    }
  })

  //this code is to loop through the array of pets and separate them into cats and dogs;
  //then we can map through the cats and dogs arrays and render them in the return statement

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
        {/* {id === "cats" || !id ? (
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
        ) : null } */}

        {/* {cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
        ))} */}

        {/* {id === "dogs" ? (  
                    dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)      
        ) : null } */}
        {/* {dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        ))} */}

        {kind === "cats"
          ? cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)
          : kind === "dogs"
          ? dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)
          : null}


      </section>
    </section>
  );
};

export default PetsList;
