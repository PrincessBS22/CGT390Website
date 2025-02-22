import Wrapper from "../components/wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState , useEffect} from 'react';

const SearchPage = () => {
//consts
  const [sites, setSites] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState("");

//name search
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const handleClear = () => {
    setSearch("");
    setPage(1);
  }

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~shaverb/personal-website/fetch-data-with-filter.php?article=${search}&page=${page}&limit=10`)
          .then(res => res.json())
          .then((data) => {
            setProfiles(data.sites);
            setCount(data.count);
            setPage(data.page);
            console.log(page)
          })
        }, [search,page]);

    return(
        <Wrapper>
          <div className="filter-wrapper">
            <div className="filter-search">
              <label htmlFor="search">Search</label>
              <input type="search" id="search" onChange={handleSearchChange} value={search}/>
              <button onClick={handleClear}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
          <div className="sites-display">
            {sites.map((sites) =>
              (<Link to={`/sites/${sites.id}`} key={sites.id}>
                <Card key={sites.id} {...sites}/>
                </Link>
              ))}
          </div>
          {count===0 && <p>No websites found!</p>}
          {count > 10 &&
          <div className="pageinator">
              <button onClick={() => {setPage(pre=>pre-1);console.log(page)} } disabled={page===1}><FontAwesomeIcon icon={faChevronLeft} /></button>
              <span>{page}/{Math.ceil(count/10)}</span>
              <button onClick={() => {setPage(pre=>pre+1);console.log(page)} } disabled={page>=Math.ceil(count/10)}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>}
        </Wrapper>
    )
}

export default SearchPage;