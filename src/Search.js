import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="searchbook">
                         <form onSubmit={this.props.handleSearch}>
                    <label>Search: </label>
                    <input type="text"  name='q' 
                    className='search-bar' placeholder="henry" required />
                    <button type="submit">Search</button>

                    <div className="filter-bar">
                        <label>Print Type</label>
                        <select name="printType">
                            <option value='all'>All</option>
                        </select>
                        <label>Book Type</label>
                        <select name='filter'>
                            <option value='ebooks'>ebooks</option>
                        </select>

                    </div>
                </form>
            </div>

        )
    }
}

export default Search;