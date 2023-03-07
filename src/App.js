import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Comp section
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import PetsList from "./components/pets/PetsList";
import StaffList from "./components/staff/StaffList";

// Data section
// Note: this data is pulled from an API in most cases
import { petData } from "./data/pets";
import { ownerData } from "./data/owners";
import { employeeData } from "./data/employees.js";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home employees={employees} owners={owners} pets={pets} />}
        />
        <Route path="/staff" element={<StaffList employees={employees} />} />
        <Route path="/pets">
          <Route index element={<PetsList pets={pets} />} />
          <Route
            path="cats"
            element={<PetsList pets={pets} petType={"cat"} />}
          />
          <Route
            path="dogs"
            element={<PetsList pets={pets} petType={"dog"} />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
