import { h } from 'preact';
import { Link } from 'preact-router/match';

const HeaderTab = ({ path, label }) => (
  <Link
    className="header__link--tab"
    href={path}
    rel="noopener"
  >
    {label}
  </Link>
);

export default HeaderTab;
