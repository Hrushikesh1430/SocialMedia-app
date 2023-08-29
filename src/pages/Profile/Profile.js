import { useNavigate, useParams } from "react-router-dom";
import MainContainer from "../../Components/MainContainer/MainContainer";

import styles from "./profile.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

import CustomModal from "../../Components/CustomModal/CustomModal";
import { EditProfile } from "./EditProfile/EditProfile";
import PostList from "../../Components/PostList/PostList";
import { DataContext } from "../../Context/DataContext";
import LogoX from "../../Components/LogoX/LogoX";
import { CustomLoader } from "../../Components/CustomLoader/CustomLoader";

const Profile = () => {
  const navigate = useNavigate();

  const [editModal, setEditModal] = useState(false);

  const [loader, setLoader] = useState(true);
  const { userState, state, dispatchUser, customToast } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  const { username } = useParams();

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

  const { user, setUserToken, setUser, setIsLoggedIn, userToken } = useContext(AuthContext);

  let selfPosts = state.initialPosts.filter((item) => item.username === username);
  selfPosts = selfPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("loggedUser");
    setUserToken("");
    setUser({});
    setIsLoggedIn(false);
    customToast("Logged out", "SUCCESS");
    navigate("/login");
  };

  const getUsersAPI = async () => {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      dispatchUser({ type: "FETCH_USERS", payLoad: data.users });

      console.log(data);
    } catch (e) {
    } finally {
      // HideLoader();
    }
  };
  const followHandler = async (id, followers) => {
    setLoading(true);
    console.log("followers", followers);
    const followStatus = followers.find((item) => item.username === user.username);
    const url = followStatus ? `/api/users/unfollow/${id}` : `/api/users/follow/${id}`;
    const config = {
      method: "POST",
      headers: {
        authorization: userToken,
      },
      body: {},
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();

      console.log(data);

      setUser(() => data.user);
      getUsersAPI();
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo === undefined || userInfo.avatarURL !== "") {
      setLoader(false);
    }
  }, [userInfo]);

  useEffect(() => {
    console.log("users", userState.users, "username", username);
    userState.users.length > 0 && setUserInfo(() => userState.users.find((item) => username === item.username));
  }, [userState.users, username]);

  const ProfileWrapper = () => {
    return (
      <>
        <CustomModal onClose={() => setEditModal(false)} modalOpen={editModal}>
          <EditProfile isEdit={true} profileInfo={user} setEditModal={setEditModal} />
        </CustomModal>

        {userInfo ? (
          <div className={styles.ProfileWrapper}>
            {!loader ? (
              <>
                <div className={styles.profile}>
                  <div className={styles.profileContainer}>
                    <div className={styles.userImage}>
                      <img src={userInfo.avatarURL} alt="userImage" />
                    </div>
                    <div className={styles.userFollowInfo}>
                      <div className={styles.userFullName}>
                        <span>
                          {userInfo.firstName} {userInfo.lastName}
                        </span>
                      </div>
                      <div className={styles.userMainname}>
                        <span>@{userInfo.username}</span>
                      </div>
                    </div>
                    {username === user.username ? (
                      <div className={styles.editParent}>
                        <button className={styles.editProfile} onClick={() => setEditModal(true)}>
                          Edit profile
                        </button>
                        <div className={styles.logout} onClick={() => logoutHandler()}>
                          <LogoutOutlinedIcon className={styles.logoutIcon} />
                          <span>Logout</span>
                        </div>
                      </div>
                    ) : (
                      <div className={styles.userFollow}>
                        <button
                          className={`${loading && styles.disabled}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            followHandler(userInfo._id, userInfo.followers);
                          }}
                        >
                          {userInfo.followers.find((item) => item.username === user.username) ? "Following" : "Follow"}
                        </button>
                      </div>
                    )}
                  </div>
                  <div className={styles.accountInfo}>
                    <div className={styles.otherInfo}>
                      <div className={styles.userlocation}>
                        <LocationOnOutlinedIcon className={styles.location} />
                        <span>Mumbai Maharashtra</span>
                      </div>
                    </div>
                    <div className={styles.bio}>
                      {userInfo.bio !== "" && (
                        <div>
                          <span>Bio : </span>
                          <span>{userInfo.bio}</span>
                        </div>
                      )}
                      {userInfo.profileURL !== "" && (
                        <div>
                          <span>Portfolio URL : </span>
                          <span>
                            <a href={userInfo.profileURL}>{userInfo.profileURL}</a>
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={styles.followInfo}>
                      {/* <div className={styles.following} onClick={() => navigate("/following/userInfo._id")}> */}
                      <div className={styles.following}>
                        <span className={styles.number}>{userInfo.following.length}</span>
                        <span>Following</span>
                      </div>
                      {/* <div className={styles.followers} onClick={() => navigate("/followers/userInfo._id")}> */}
                      <div className={styles.followers} onClick={() => navigate("/following/userInfo._id")}>
                        <span className={styles.number}>{userInfo.followers.length}</span>
                        <span>Followers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.loaderParent}>
                <CustomLoader width={30} height={30} loading={loader} className={styles.loaderStyle} />
              </div>
            )}

            {selfPosts.length > 0 ? (
              <PostList posts={selfPosts} type="self" />
            ) : (
              <div className={styles.notFound}>
                <span>No posts to show.</span>
                <LogoX className={styles.bookmarkLogo} />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.notFound}>
            <span>Profile not found</span>
            <LogoX className={styles.bookmarkLogo} />
          </div>
        )}
      </>
    );
  };
  if (username === undefined) {
    navigate("/home");
    return null;
  }

  if (userInfo.avatarURL === undefined) {
    navigate("/home");
    return null;
  }

  return (
    <>
      <MainContainer component={<ProfileWrapper />} title={"Profile"} />
    </>
  );
};

export default Profile;
