import { useState } from "react";
import {Route,Routes} from "react-router-dom"

// Comp section
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import PetsList from "./components/pets/PetsList";
import StaffList from "./components/staff/StaffList";

// Data section
// Note: this data is pulled from an API in most cases
import {petData} from "./data/pets";
import {ownerData} from "./data/owners";
import {employeeData} from "./data/employees.js";


function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);

  return (
    <div className="wrapper">
      <Nav />
      <Home employees={employees} owners={owners} pets={pets} />
      <StaffList employees={employees} />
      <PetsList pets={pets} />
      <Footer />
    </div>
  );
}

export default App;
