import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import { user } from '../../redux/modules';
import { asJS } from '../../helper/immutableHelper';
import Repository from './Repository';

const Repos = ({ repositories }) => (
  <div className="repos__div--container">
    {asJS(repositories.map((repository, i) => (<Repository repository={repository} key={i} />)))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  repositories: user.selectors.getUserRepositories
});

export default connect(mapStateToProps)(Repos);
