import { useState , useEffect} from 'react';
import './App.css'
import "./styles/global.css"
import Wrapper from "./components/wrapper";
import Bookmarks from "./components/bookmarks";
import Search from "./components/search";

function App() {

  return (
    <>
    <header>
      <Bookmarks/>
    </header>
    <main>
      <Wrapper>
        <h1>Rip off google</h1>
      </Wrapper>
    </main>  
    </>
  )
}

export default App
