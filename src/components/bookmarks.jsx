import "../styles/bookmark.css";
import {Link} from "react-router-dom";

const Bookmarks= () => {
    return(
        <nav className="Bookmarks">
                
            
            <ul className="links">
                <li><h2 className="title"><Link to="/FormPage">Bookmarks</Link></h2></li>
                <li></li>
                <li><a href="https://www.youtube.com/">Youtube</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://web.whatsapp.com/">WhatsApp</a></li>
                <li><a href="https://chatgpt.com/">ChatGPT</a></li>
                <li><a href="https://www.coolmathgames.com/">Coolmath Games</a></li>
            </ul>
            
        </nav>
    )
}
export default Bookmarks;