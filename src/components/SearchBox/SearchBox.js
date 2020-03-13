import React from 'react';

const SearchBox = props => {
    return (
        <div id="search-contact">
            <input onChange={props.handleSearch} type="text" placeholder="Search contact..." />
        </div>
    )
}

export default SearchBox;