import "./Pet.css";
// import { useParams } from "react-router-dom";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ pet, kind }) => {
  // let { kind } = useParams();

  const icon = iconMap[kind];
  
  // const petKind = pets.filter(pet => pet.kind === kind)

  
  return (
    <article key={pet.id}>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
  
};

export default Pet;
