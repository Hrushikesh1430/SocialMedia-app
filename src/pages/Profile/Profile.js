import { useNavigate } from "react-router-dom";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import userpic from "../../assets/images/default_user.png";

import styles from "./profile.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import ImageUpload from "./ImageUpload";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { EditProfile } from "./EditProfile/EditProfile";
import PostList from "../../Components/PostList/PostList";
import { DataContext } from "../../Context/DataContext";

const Profile = () => {
  const navigate = useNavigate();

  const [editModal, setEditModal] = useState(false);
  const { userState, state } = useContext(DataContext);

  const [userInfo, setUserInfo] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    username: "",
    avatarURL: "",
    password: "",
    bio: "",
    profileURL: "",
    createdAt: "",
    updatedAt: "",
    followers: [],
    following: [],
    bookmarks: [],
    id: "",
  });

  const { user } = useContext(AuthContext);

  const selfPosts = state.filteredPosts.filter((item) => item.username === user.username);

  useEffect(() => {
    userState.users.length > 0 && setUserInfo(() => userState.users.find((item) => user.username === item.username));
  }, [userState.users]);

  const ProfileWrapper = () => {
    return (
      <>
        <CustomModal onClose={() => setEditModal(false)} modalOpen={editModal}>
          <EditProfile isEdit={true} profileInfo={user} setEditModal={setEditModal} />
        </CustomModal>
        <div className={styles.ProfileWrapper}>
          {/* <ImageUpload /> */}
          <div className={styles.pageTitle}>Profile</div>
          <div className={styles.profile}>
            <div className={styles.profileContainer}>
              <div className={styles.userImage}>
                {/* <img
                src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                alt="userImage"
              /> */}
                <img src={user.avatarURL} alt="userImage" />
              </div>
              <div className={styles.userFollowInfo}>
                <div className={styles.userFullName}>
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <div className={styles.userMainname}>
                  <span>@{user.username}</span>
                </div>
              </div>
              <div className={styles.userMore}>
                <button onClick={() => setEditModal(true)}>Edit profile</button>
              </div>
            </div>
            <div className={styles.accountInfo}>
              <div className={styles.otherInfo}>
                <div className={styles.userlocation}>
                  <LocationOnOutlinedIcon className={styles.location} />
                  <span>Mumbai Maharashtra</span>
                </div>
              </div>
              <div className={styles.bio}>
                {user.bio !== "" && (
                  <div>
                    <span>Bio : </span>
                    <span>{user.bio}</span>
                  </div>
                )}
                {user.profileURL !== "" && (
                  <div>
                    <span>Portfolio URL : </span>
                    <span>
                      <a href={user.profileURL}>{user.profileURL}</a>
                    </span>
                  </div>
                )}
              </div>
              <div className={styles.followInfo}>
                {/* <div className={styles.posts}>
                  <span className={styles.number}></span>
                  <span>Posts</span>
                </div> */}
                <div className={styles.following} onClick={() => navigate("/following")}>
                  <span className={styles.number}>{userInfo.following.length}</span>
                  <span>Following</span>
                </div>
                <div className={styles.followers} onClick={() => navigate("/followers")}>
                  <span className={styles.number}>{userInfo.followers.length}</span>
                  <span>Followers</span>
                </div>
              </div>
            </div>
          </div>
          <PostList posts={selfPosts} type="self" />
        </div>
      </>
    );
  };
  return (
    <>
      <MainContainer component={<ProfileWrapper />} />
    </>
  );
};

export default Profile;
