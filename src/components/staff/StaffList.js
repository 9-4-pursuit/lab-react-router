import Staffer from "./Staffer";
import "./StaffList.css";
import { Link } from "react-router-dom";

export const StaffList = ({ employees }) => {
  const staff = employees.map((employee) => (
    <Staffer key={employee.id} employee={employee} />
  ));

  return (
<Link to='/staff'>
    <section className="staff-list">
      <h2>Our Staff</h2>
      <div className="staffers">{staff}</div>
    </section>
</Link>
  );
};

export default StaffList;
