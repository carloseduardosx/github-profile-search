import { h } from 'preact';

const SearchInput = ({ placeholder, onInput }) => (
  <div className="search">
    <div className="search__div" >
      <input className="search__input" type="text" onInput={onInput} required />
      <span className="search--bar" />
      <label className="search__label">{placeholder}</label>
    </div>
  </div>
);

export default SearchInput;
