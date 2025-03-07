import "../styles/bookmark.css";
import {Link} from "react-router-dom";

const Bookmarks= () => {
    return(
        <nav className="Bookmarks">
            
            <ul>
                <li><Link to="/FormPage">Bookmarks</Link></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Profiles</a></li>
            </ul>
            
        </nav>
    )
}
export default Bookmarks;