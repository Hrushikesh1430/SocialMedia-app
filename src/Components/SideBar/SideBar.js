// import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
// import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
// import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
// import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import XIcon from "../../Components/XIcon/XIcon";

import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { DataContext } from "../../Context/DataContext";
import CustomModal from "../CustomModal/CustomModal";
import PostInput from "../PostInput/PostInput";

const SiderBar = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { userState } = useContext(DataContext);

  const [userInfo, setUserInfo] = useState({});

  const [postModal, setPostModal] = useState(false);

  console.log(userState.users);

  // useEffect(() => {
  //   if (userState.users.length > 0) {
  //     setUserInfo(() => userState.users.find((item) => item.username === user.username));
  //   }
  // }, [userState.users]);

  return (
    <>
      <CustomModal onClose={() => setPostModal(false)} modalOpen={postModal}>
        <div className={styles.editContainer}>
          <PostInput isEdit={false} postId="" setModal={setPostModal} />
        </div>
      </CustomModal>

      <div className={styles.sideBarParent}>
        <nav className={styles.navBar}>
          <XIcon className={styles.xicon} />
          <div className={styles.navBarItem} onClick={() => navigate("/home")}>
            <span className={styles.itemIcon}>
              <HomeOutlinedIcon className={styles.home} />
            </span>
            <span className={styles.itemName}>Home</span>
          </div>
          <div className={styles.navBarItem} onClick={() => navigate("/explore")}>
            <span className={styles.itemIcon}>
              <ExploreOutlinedIcon className={styles.explore} />
            </span>
            <span className={styles.itemName}>Explore</span>
          </div>
          <div className={styles.navBarItem} onClick={() => navigate("/bookmarks")}>
            <span className={styles.itemIcon}>
              <BookmarkBorderOutlinedIcon className={styles.bookmark} />
            </span>
            <span className={styles.itemName}>Bookmarks</span>
          </div>
          <div className={styles.navBarItem} onClick={() => navigate("/liked")}>
            <span className={styles.itemIcon}>
              <FavoriteBorderOutlinedIcon className={styles.heart} />
            </span>
            <span className={styles.itemName}>Liked posts</span>
          </div>
          <div className={styles.navBarItem} onClick={() => navigate("/profile")}>
            <span className={styles.itemIcon}>
              <PermIdentityOutlinedIcon className={styles.heart} />
            </span>
            <span className={styles.itemName}>Profile</span>
          </div>
          <div className={styles.navBarItem}>
            <button className={styles.post} onClick={() => setPostModal(true)}>
              Post
            </button>
          </div>

          <div className={styles.user} onClick={() => navigate("/profile")}>
            <div className={styles.userImage}>
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
              <span>...</span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SiderBar;
