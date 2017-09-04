import { h } from 'preact';
import ToolbarTitle from './ToolbarTitle';
import ToolbarAction from './ToolbarAction';
import ToolbarActionContainer from './ToolbarActionContainer';

const Toolbar = () => (
  <div className="toolbar__div">
    <ToolbarTitle label="GitHub Profile Search" />
    <ToolbarActionContainer>
      <ToolbarAction path="/github-profile-search/repos" label="REPOS" />
      <ToolbarAction path="/github-profile-search/notes" label="NOTES" />
    </ToolbarActionContainer>
  </div>
);

export default Toolbar;
