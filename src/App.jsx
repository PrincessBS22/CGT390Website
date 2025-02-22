import { useState , useEffect} from 'react';
import './App.css'
import "./styles/global.css"
import Wrapper from "./components/wrapper";
import Bookmarks from "./components/bookmarks";
import SearchPage from "./pages/SearchPage";
import FormPage from "./pages/FormPage";
import { HashRouter, Routes, Route} from "react-router-dom";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    if(!darkMode){
      document.body.classList.add("darkMode")
    }
    else{
      document.body.classList.remove("darkMode")
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
    <HashRouter>
      <header>
        <Bookmarks/>
      </header>
      <main className="corpse">
        <Routes>
          <Route path="/" element={<SearchPage/>}/>
          <Route path="/FormPage" element={<FormPage/>}/>
        </Routes>
      </main>
    </HashRouter>  
    </>
  )
}

export default App
