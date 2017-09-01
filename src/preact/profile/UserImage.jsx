import { h } from 'preact';

const UserImage = ({ imageUrl }) => (
  <img className="user__img" src={imageUrl} alt="user" />
);

export default UserImage;
