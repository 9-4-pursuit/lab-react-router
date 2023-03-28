import { useState } from "react";
import { Routes, Route, Navigate} from "react-router-dom"


/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import DogsList from "./components/pets/DogsList";
import CatsList from "./components/pets/CatsList";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";


function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);
  const shouldRedirect = true;

  // function getCats(pets){
  //   pets.map((e)=>{
  //    if(e.kind === 'Cat'){
  //     return( 
  //       console.log(e)
  //   )}
  //   return e
  //   })
  // }

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path='/' element={<Home employees={employees} owners={owners} pets={pets} />} />
        <Route path='staff' element={<StaffList employees={employees} />} />
        <Route path='pets/' element={ shouldRedirect ? 
        (<Navigate replace to="/pets/cats" />) : (<PetsList pets={pets}/>)} />
        <Route path='pets/cats' element={<CatsList pets={pets} />}/>
        <Route path='pets/dogs' element={<DogsList pets={pets} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
