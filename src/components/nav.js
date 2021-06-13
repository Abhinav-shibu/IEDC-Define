import '../App.css';

export default function Nav(){
    return(
        <nav className="navbar navbar-dark" style={{backgroundColor: "#0f0f0f"}}>
            <a class="navbar-brand" href="#">DEFINE</a>
            <form className="form-inline">
                <button className="btn btn-outline-success" type="button">Register</button>
            </form>
        </nav>
    );
}