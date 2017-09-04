import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';
import { user } from '../../redux/modules';
import UserImage from './UserImage';
import UserInfo from './UserInfo';
import pureComponent from '../../helper/componentHelper';

@pureComponent
class Profile extends Component {
  render({ userImageUrl, user }) {
    return (
      <div className="profile__div--container">
        <UserImage imageUrl={userImageUrl} />
        <UserInfo user={user} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: user.selectors.getUser,
  userImageUrl: user.selectors.getUserImageUrl
});

export default connect(mapStateToProps)(Profile);
