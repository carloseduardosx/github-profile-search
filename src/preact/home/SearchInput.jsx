import { h } from 'preact';

const SearchInput = ({ placeholder, onInput, value }) => (
  <div className="search">
    <div className="search__div" >
      <input id="search__input" className="search__input" type="text" value={value} onInput={onInput} required />
      <span className="search--bar" />
      <label className="search__label" htmlFor="search__input" >{placeholder}</label>
    </div>
  </div>
);

export default SearchInput;
