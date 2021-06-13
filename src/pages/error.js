import '../App.css';
import Nav from '../components/nav';
import {Link} from "react-router-dom";

export default function Error(){
    return(
        <div>
            <Nav />
            <p className="error"><h1>The page you are trying to find is not available.</h1></p>
            <Link to="/"><p className="error">Back to home</p></Link>
        </div>
    );
}