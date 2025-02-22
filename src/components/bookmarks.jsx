import "../styles/bookmark.css";
import {Link} from "react-router-dom";

const Bookmarks= ({darkMode, onClick}) => {
    return(
        <nav className="Bookmarks">
            
            <button onClick={onClick}>
                {darkMode ? "Dark Mode"  : "Light Mode"}
            </button>
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