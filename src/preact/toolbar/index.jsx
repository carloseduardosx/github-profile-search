import { h } from 'preact';
import Header from './Header';
import HeaderTab from './HeaderTab';
import HeaderTabs from './HeaderTabs';
import HeaderTitle from './HeaderTitle';

const Toolbar = () => (
  <Header>
    <HeaderTitle label="GitHub Profile Search" />
    <HeaderTabs>
      <HeaderTab path="/repos" label="REPOS" />
      <HeaderTab path="/notes" label="NOTES" />
    </HeaderTabs>
  </Header>
);

export default Toolbar;
