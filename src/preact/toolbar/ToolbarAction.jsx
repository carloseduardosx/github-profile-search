import { h } from 'preact';
import { Link } from 'preact-router/match';

const ToolbarAction = ({ path, label }) => (
  <Link
    activeClassName="toolbar__link--tab-active"
    className="toolbar__link--tab"
    href={path}
    rel="noopener"
  >
    {label}
  </Link>
);

export default ToolbarAction;
