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

const SiderBar = () => {
  const navigate = useNavigate();
  return (
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
          <button className={styles.post}>Post</button>
        </div>

        <div className={styles.user} onClick={() => navigate("/profile")}>
          <div className={styles.userImage}>
            <img src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp" alt="userImage" />
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
            <span>...</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SiderBar;
