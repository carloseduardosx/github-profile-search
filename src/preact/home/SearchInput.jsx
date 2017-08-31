import { h } from 'preact';

const SearchInput = ({ placeholder }) => (
  <div className="search">
    <div className="search__div" >
      <input className="search__input" type="text" required />
      <span className="search--bar" />
      <label className="search__label">{placeholder}</label>
    </div>
  </div>
);

export default SearchInput;
