import { h } from 'preact';
import SearchInput from './SearchInput';
import Button from './Button';

const Home = () => (
  <div className="home__div--container">
    <SearchInput placeholder="Username" />
    <Button label="Search" />
  </div>
);

export default Home;
