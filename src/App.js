import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";

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

  let dogArr = []
  let catArr = []

 
  petData.map((pet) => {
      if(pet.kind === "Dog"){
        dogArr.push(pet)
      }else {
        catArr.push(pet)
      }
    })
  

  return (
    <div className="wrapper">
      <Nav />
      {/* <Home employees={employees} owners={owners} pets={pets} /> */}
      {/* <StaffList employees={employees} /> */}
      {/* change to use routes below */}
      {/* <PetsList pets={pets} /> */}
      
      {/* create all routes needed in read me */}
      <Routes>

        <Route
        path="/"
        element={<Home employees={employees} owners={owners} pets={pets}/>}
        />

        <Route
        path="/pets"
        element={ !pets ? <PetsList pets={pets} />: <Navigate to="/pets/cats"/> }
        />

        <Route
        path='/pets/dogs'
        element={<PetsList pets={dogArr} />}
        />

        <Route
        path='/pets/cats'
        element={<PetsList pets={catArr} />}
        />

        

        <Route
        path="/staff"
        element={<StaffList employees={employees} />}
        />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
