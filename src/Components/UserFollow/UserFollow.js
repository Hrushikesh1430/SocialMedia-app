import { useContext, useState } from "react";
import styles from "./userFollow.module.css";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";

const UserFollow = ({ firstName, lastName, username, avatarURL, followers, following, id, onClick }) => {
  // console.log("followers", followers);
  const [loading, setLoading] = useState(false);
  const { userToken, user, setUser } = useContext(AuthContext);
  const { dispatchUser, customToast } = useContext(DataContext);

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
  const followHandler = async (id, username) => {
    setLoading(true);
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
      setUser(() => data.user);
      getUsersAPI();
      followStatus ? customToast(`Unfollowed ${username}`, "SUCCESS") : customToast(`Followed ${username}`, "SUCCESS");
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.user} onClick={onClick}>
        <div className={styles.userImage}>
          <img src={avatarURL} alt="userImage" />
        </div>
        <div className={styles.userFollowInfo}>
          <div className={styles.userFullName}>
            <span>
              {firstName} {lastName}
            </span>
          </div>
          <div className={styles.userMainname}>
            <span>@{username}</span>
          </div>
        </div>
        <div className={styles.userFollow}>
          <button
            className={`${loading && styles.disabled}`}
            onClick={(e) => {
              e.stopPropagation();
              followHandler(id, username);
            }}
          >
            {followers.find((item) => item.username === user.username) ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </>
  );
};

export default UserFollow;
