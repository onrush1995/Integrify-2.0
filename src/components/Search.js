import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div className='searchBar'>
            <form id='form' role='search'>
                <input
                    type='search'
                    id='query'
                    name='q'
                    placeholder='Search...'
                    aria-label='Search through site content'
                />
                <button>Search</button>
            </form>
        </div>
    );
};

export default Search;
