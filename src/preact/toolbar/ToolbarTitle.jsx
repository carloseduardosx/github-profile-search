import { h } from 'preact';

const ToolbarTitle = ({ label }) => (
  <div className="header__div--title">
    <a className="header__a--label" href="/github-profile-search/">{label}</a>
  </div>
);

export default ToolbarTitle;
