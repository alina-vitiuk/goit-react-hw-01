import PropTypes from "prop-types";
import CSS from "./Profile.module.css";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={CSS.wrapper}>
      <div className={CSS.card}>
        <img className={CSS.userPhoto} src={avatar} alt="User avatar" />
        <p className={CSS.userName}>{username}</p>
        <p className={CSS.userInfo}>&#64;{tag}</p>
        <p className={CSS.userInfo}>{location}</p>
      </div>

      <ul className={CSS.list}>
        <li className={CSS.listItem}>
          <span className={CSS.text}>Followers</span>{" "}
          <span className={CSS.numbers}>{followers}</span>
        </li>

        <li className={CSS.listItem}>
          <span className={CSS.text}>Views</span>
          <span className={CSS.numbers}>{views}</span>
        </li>

        <li className={CSS.listItem}>
          <span className={CSS.text}>Likes</span>
          <span className={CSS.numbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
