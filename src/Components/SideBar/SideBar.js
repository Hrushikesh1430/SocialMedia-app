import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

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
            <HomeRoundedIcon className={styles.home} />
          </span>
          <span className={styles.itemName}>Home</span>
        </div>
        <div className={styles.navBarItem} onClick={() => navigate("/explore")}>
          <span className={styles.itemIcon}>
            <ExploreRoundedIcon className={styles.explore} />
          </span>
          <span className={styles.itemName}>Explore</span>
        </div>
        <div className={styles.navBarItem} onClick={() => navigate("/bookmarks")}>
          <span className={styles.itemIcon}>
            <BookmarkRoundedIcon className={styles.bookmark} />
          </span>
          <span className={styles.itemName}>Bookmarks</span>
        </div>
        <div className={styles.navBarItem} onClick={() => navigate("/liked")}>
          <span className={styles.itemIcon}>
            <FavoriteRoundedIcon className={styles.heart} />
          </span>
          <span className={styles.itemName}>Liked posts</span>
        </div>
        <div className={styles.navBarItem}>
          <button className={styles.post}>Post</button>
        </div>
      </nav>
    </div>
  );
};

export default SiderBar;
