import { useNavigate } from "react-router-dom";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./profile.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Profile = () => {
  const navigate = useNavigate();
  const ProfileWrapper = () => {
    return (
      <div className={styles.ProfileWrapper}>
        <div className={styles.pageTitle}>Profile</div>
        <div className={styles.profile}>
          <div className={styles.profileContainer}>
            <div className={styles.userImage}>
              <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="userImage"
              />
            </div>
            <div className={styles.userFollowInfo}>
              <div className={styles.userFullName}>
                <span>Madhavi Tawde</span>
              </div>
              <div className={styles.userMainname}>
                <span>@madhavit</span>
              </div>
            </div>
            <div className={styles.userMore}>
              <button>Edit profile</button>
            </div>
          </div>
          <div className={styles.accountInfo}>
            <div className={styles.otherInfo}>
              <div className={styles.userlocation}>
                <LocationOnOutlinedIcon className={styles.location} />
                <span>Mumbai Maharashtra</span>
              </div>
            </div>
            <div className={styles.followInfo}>
              <div className={styles.posts}>
                <span className={styles.number}>8</span>
                <span>Posts</span>
              </div>
              <div className={styles.following} onClick={() => navigate("/following")}>
                <span className={styles.number}>2</span>
                <span>Following</span>
              </div>
              <div className={styles.followers} onClick={() => navigate("/followers")}>
                <span className={styles.number}>10</span>
                <span>Followers</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postListContainer}>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  };
  return (
    <>
      <MainContainer component={<ProfileWrapper />} />
    </>
  );
};

export default Profile;
