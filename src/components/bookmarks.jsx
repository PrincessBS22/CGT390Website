import "../styles/bookmark.css";


const Bookmarks= ({darkMode, onClick}) => {
    return(
        <nav className="Bookmarks">
            
            <button onClick={onClick}>
                {darkMode ? "Dark Mode"  : "Light Mode"}
            </button>
            <ul>
                <li>Bookmarks</li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Profiles</a></li>
            </ul>
            
        </nav>
    )
}
export default Bookmarks;