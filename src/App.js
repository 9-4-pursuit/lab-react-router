import { useState } from "react";

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
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  let dogArr = [];
  let catArr = [];

  petData.map((animal) => {
    if (animal.kind === "Dog") {
      dogArr.push(animal)
    } else {
      catArr.push(animal)
    }
  })

  return (
    <div className="wrapper">
      <Nav />
      {/*<Home employees={employees} owners={owners} pets={pets} />
      <StaffList employees={employees} />
      <PetsList pets={pets} />
       */}

      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        <Route
          path="/pets"
          element={ !pets ? <PetsList pets={pets} />: <Navigate to="/pets/cats"/>}
        />

        <Route
          path="/pets/cats"
          element={<PetsList pets={catArr} />}
        />

        <Route
          path="/pets/dogs"
          element={<PetsList pets={dogArr} />}
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
