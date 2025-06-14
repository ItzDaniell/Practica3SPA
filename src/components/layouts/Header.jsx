import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <header className="navbar navbar-expand-lg bg-body-tertiary">
        <nav className="container-fluid">
            <a className="navbar-brand" href="#">NetFlix</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" to={"/"}>Home</Link>
                <Link className="nav-link" to={"/items"}>Peliculas</Link>
            </div>
            </div>
        </nav>
        </header>
    );
}

export default Header
