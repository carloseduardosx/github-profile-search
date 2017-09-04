import { h } from 'preact';
import { Link } from 'preact-router/match';

const ToolbarAction = ({ path, label }) => (
  <Link
    className="header__link--tab"
    href={path}
    rel="noopener"
  >
    {label}
  </Link>
);

export default ToolbarAction;
