import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import SearchInput from './SearchInput';
import Button from './Button';
import { callNames } from '../../api';
import { connectivity, user } from '../../redux/modules';
import pureComponent from '../../helper/componentHelper';

@pureComponent
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSearchRequested({ requestApiCallAction }) {
    return () => {
      const userName = this.state.search;
      if (userName.trim().length) {
        requestApiCallAction(
          callNames.FETCH_USER,
          { userName: this.state.search.toLowerCase() },
          user.actions.FETCH_USER
        );
      }
    };
  }

  onInputChange({ target: { value } }) {
    this.setState({ search: value });
  }

  render(props) {
    return (
      <div className="home__div--container">
        <SearchInput placeholder="Username" onInput={this.onInputChange} value={this.state.search} />
        <Button label="Search" onClick={this.onSearchRequested(props)} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  requestApiCallAction: connectivity.actions.requestApiCall
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
