import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import SearchInput from './SearchInput';
import Button from './Button';
import { callNames } from '../../api';
import { connectivity, user } from '../../redux/modules';

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
      requestApiCallAction(
        callNames.FETCH_USER,
        { userName: this.state.search },
        user.actions.FETCH_USER
      );
    };
  }

  onInputChange({ target: { value } }) {
    this.setState({ search: value });
  }

  render(props) {
    return (
      <div className="home__div--container">
        <SearchInput placeholder="Username" onInput={this.onInputChange} />
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
