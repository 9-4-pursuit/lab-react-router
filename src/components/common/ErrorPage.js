import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <div>
            <h1>Error 404 Page Not Found!</h1>
            <h2>Nothing to see here! go to  {<Link to='/pets/cats'>here</Link>}</h2>
        </div>
    )
}