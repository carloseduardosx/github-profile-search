import { h } from 'preact';
import ToolbarTitle from './ToolbarTitle';
import ToolbarAction from './ToolbarAction';
import ToolbarActionContainer from './ToolbarActionContainer';

const Toolbar = () => (
  <div className="navbar__div">
    <ToolbarTitle label="GitHub Profile Search" />
    <ToolbarActionContainer>
      <ToolbarAction path="/repos" label="REPOS" />
      <ToolbarAction path="/notes" label="NOTES" />
    </ToolbarActionContainer>
  </div>
);

export default Toolbar;
