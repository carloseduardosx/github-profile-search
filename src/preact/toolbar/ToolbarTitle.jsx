import { h } from 'preact';

const ToolbarTitle = ({ label }) => (
  <div className="toolbar__div--title">
    <a className="toolbar__a--label" href="/github-profile-search/">{label}</a>
  </div>
);

export default ToolbarTitle;
