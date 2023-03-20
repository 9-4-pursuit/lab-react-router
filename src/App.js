import { useState, Redirect} from "react";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom" //added

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
  // eslint-disable-next-line 
import Staffer from "./components/staff/Staffer";


function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);



  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Nav />

          <main>
            <Routes>
              <Route path="/" element={<Home employees={employees} owners={owners} pets={pets} />}/>
              <Route path="/staff" element={<StaffList employees={employees} />} />
              <Route path='/pets/cats' element={<PetsList pets={pets} />} />
              {/* <Route path="/pets" element={<Redirect to="/pets/cats" />}/> */}
              <Route path="/pets/:kind" element={<PetsList pets={pets} />} />


            </Routes>
          </main> 
   
        </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

//Another option?
//EYE was missing the following part, with the mapping

// let dogArr = []
// let catArr = []

// <Route path="/pets/cats" element={<PetsList pets={catArr} />}/>
// <Route path="/pets/dogs" element={<PetsList pets={dogArr} />}/>

// pets.map((pet) => {
//   if(pet.kind === "Dog"){
//     dogArr.push(pet)
//   } else {
//     catArr.push(pet)
//   }
// })


