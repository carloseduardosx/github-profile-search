import { h } from 'preact';

const UserInfo = ({ user }) => (
  <div className="user__div--info" >
    <h1>
      <span className="name__span">{user.get('name')}</span>
      <span className="login__span">{user.get('login')}</span>
    </h1>
    <h3>
      <span className="email__span--label">Location: </span>
      <span className="email__span">{user.get('location')}</span>
    </h3>
    {user.get('email') &&
      <h3>
        <span className="location__span--label">Email: </span>
        <span className="location__span">{user.get('email')}</span>
      </h3>
    }
    {user.get('company') &&
      <h3>
        <span className="company__span--label">Company: </span>
        <span className="company__span">{user.get('company')}</span>
      </h3>
    }
    <h3>
      <span className="followers__span--label">Followers: </span>
      <span className="followers__span">{user.get('followers')}</span>
    </h3>
    <h3>
      <span className="following__span--label">Following: </span>
      <span className="following__span">{user.get('following')}</span>
    </h3>
    <h3>
      <span className="repositories__span--label">Public Repositories: </span>
      <span className="repositories__span">{user.get('public_repos')}</span>
    </h3>
    <h3 className="blog__h3" >
      <span className="blog__span--label">Blog: </span>
      <a
        className="blog__span"
        href={user.get('blog')}
        target="_blank"
      >
        {user.get('blog')}
      </a>
    </h3>
  </div>
);

export default UserInfo;
