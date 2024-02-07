import React from 'react';
import "./SearchComponent.css";
import SearchComponentCard from './SearchComponentCard';

const SearchComponet = () => {
  return (
    <div className='searchContainer'>
        <div>
            <h1 className='pb-2 pl-2 heading'>Search</h1>
            <input type='text' placeholder='Search' className='search'/>
        </div>
        <br/>
        <hr />
        <div className='pt-2'>
            {[1,1,1,1,1,1,1].map((item) => <SearchComponentCard/>)}
        </div>
    </div>
  )
}

export default SearchComponet