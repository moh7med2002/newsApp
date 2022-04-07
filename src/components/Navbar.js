import { Link} from "react-router-dom";
  

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container nav-container">
                <h1 className="navbar-brand fs-2 fw-bold" style={{color:"white"}}>Graph CMS</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to={'/'}>Home</Link>
                        <Link className="nav-link" to={`category/web`}>web devlopment</Link>
                        <Link className="nav-link" to={`category/sport`}>sport</Link>
                        <Link className="nav-link" to={`category/education`} >education</Link>
                        <Link className="nav-link" to={`category/building`} >building</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}