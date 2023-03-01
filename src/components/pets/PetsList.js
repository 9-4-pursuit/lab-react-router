import { useParams, redirect, useLocation, useNavigate } from "react-router-dom"
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {

  //   const location = useLocation();
  //   const loader = async () => {
  //     if (location === "/pets") {
  //       return redirect("/pets/cats");
  //     }
  //   }
  // loader();

  // const navigate = useNavigate();
  // let location = useLocation();
  // console.log(location.pathname);
  // if (location.pathname==="/pets") {
  //   navigate("/pets/cats");
  // }

  const { id } = useParams();
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );
  // console.log(id);

  // const navigate = useNavigate();
  // navigate ("/pets", { replace: true, state: {id: "/cats"}});


  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}

        {(id === "cats" || id === undefined) ?
          cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))
          : (id === "dogs" || id === undefined) ?
            dogs.map((dog) => (
              <Pet key={dog.id} kind="dog" pet={dog} />
            ))
            :
            null
        }

      </section>
    </section>
  );
};

export default PetsList;
