import { h } from 'preact';

const HeaderTitle = ({ label }) => (
  <div className="header__div--title">
    <a className="header__a--label" href="/">{label}</a>
  </div>
);

export default HeaderTitle;
