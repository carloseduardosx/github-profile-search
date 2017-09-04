import { h, Component } from 'preact';
import { createStructuredSelector } from 'reselect';
import { connect } from 'preact-redux';
import { user } from '../../redux/modules';
import ToolbarTitle from './ToolbarTitle';
import ToolbarAction from './ToolbarAction';
import ToolbarActionContainer from './ToolbarActionContainer';
import pureComponent from '../../helper/componentHelper';

@pureComponent
class Toolbar extends Component {
  render({ username }) {
    return (
      <div className="toolbar__div">
        <ToolbarTitle label="GitHub Profile Search" />
        <ToolbarActionContainer>
          <ToolbarAction path={username ? '/github-profile-search/profile' : ''} label="PROFILE" />
          <ToolbarAction path={username ? '/github-profile-search/repos' : ''} label="REPOS" />
          <ToolbarAction path={username ? '/github-profile-search/notes' : ''} label="NOTES" />
        </ToolbarActionContainer>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  username: user.selectors.getUsername
});

export default connect(mapStateToProps)(Toolbar);
