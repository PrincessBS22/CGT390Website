import Wrapper from "../components/wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Sites from "../components/sites";

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
    fetch(`https://web.ics.purdue.edu/~shaverb/personal-website/fetch-data-with-filter1.php?article=${search}&page=${page}&limit=10`)
      .then(res => {
        // res.text().then(text => console.log(text));
        res.json()
        .then((data) => {
          console.log(data)
          setSites(data.sites);
          setCount(data.count);
          setPage(data.page);
          console.log(page)
        })
      })
  }, [search, page]);

  if (!sites) {
    return (
      <Wrapper>
        <div>Loading</div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className="filter-wrapper">
        <div className="filter-search">
          <label htmlFor="search">Search </label>
          <input type="search" id="search" onChange={handleSearchChange} value={search} />
          <button className="button" onClick={handleClear}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
      <div className="sites-display">
        {sites.map((sites) =>
          (<Sites key={sites.id} {...sites} />))}
      </div>
    </Wrapper>
  )
}

export default SearchPage;