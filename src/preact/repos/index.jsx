import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import { user } from '../../redux/modules';
import { asJS } from '../../helper/immutableHelper';
import Repository from './Repository';
import pureComponent from '../../helper/componentHelper';

@pureComponent
class Repos extends Component {
  render({ repositories }) {
    return (
      <div className="repos__div--container">
        {
          asJS(repositories.map((repository, i) =>
            (<Repository repository={repository} key={i} />)))
        }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  repositories: user.selectors.getUserRepositories
});

export default connect(mapStateToProps)(Repos);
