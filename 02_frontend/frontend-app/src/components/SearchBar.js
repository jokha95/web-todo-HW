import React, {useState} from "react";

export default function SearchBar({toSearch}) {
    const [searchValue, setSearchValue] = useState();
    const handleSearchWord = e => {
        e.preventDefault();
        toSearch(searchValue);
    }
    const handleClear = () => {
        setSearchValue('');
    }
    return (
        <div className="todo"> {console.log('searchValue: ', searchValue)}
            <form onSubmit={handleSearchWord}>
                <input
                    className="input"
                    placeholder="Search.."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </form>
            <button
                className="button"
                onClick={handleClear}
            >
                Clear
            </button>
        </div>
    );
}