import {useNavigate, Link} from 'react-router-dom'


export default function Categories(){
    let navg=useNavigate();
    return(
        <div className="categories">
            <h3 className="fs-5 fw-bold">
                Categories
            </h3>
            <ul>
                <Link to={'/category/sport'}>sport</Link>
                <Link to={'/category/web'}>web development</Link>
                <Link to={'/category/education'}>education</Link>
                <Link to={'/category/building'}>building</Link>
            </ul>
        </div>
    )
}