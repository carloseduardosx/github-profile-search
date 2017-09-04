import { h } from 'preact';

const ToolbarTitle = ({ label }) => (
  <div className="header__div--title">
    <a className="header__a--label" href="/">{label}</a>
  </div>
);

export default ToolbarTitle;
