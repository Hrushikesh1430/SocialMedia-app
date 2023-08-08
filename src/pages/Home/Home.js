import XIcon from "../../Components/XIcon/XIcon";
import styles from "./home.module.css";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Home = () => {
  return (
    <div className={styles.homeParent}>
      <div className={styles.sideBarParent}>
        <nav className={styles.navBar}>
          <XIcon className={styles.xicon} />
          <div className={styles.navBarItem}>
            <span className={styles.itemIcon}>
              <HomeRoundedIcon className={styles.home} />
            </span>
            <span className={styles.itemName}>Home</span>
          </div>
          <div className={styles.navBarItem}>
            <span className={styles.itemIcon}>
              <ExploreRoundedIcon className={styles.explore} />
            </span>
            <span className={styles.itemName}>Explore</span>
          </div>
          <div className={styles.navBarItem}>
            <span className={styles.itemIcon}>
              <BookmarkRoundedIcon className={styles.bookmark} />
            </span>
            <span className={styles.itemName}>Bookmarks</span>
          </div>
          <div className={styles.navBarItem}>
            <span className={styles.itemIcon}>
              <FavoriteRoundedIcon className={styles.heart} />
            </span>
            <span className={styles.itemName}>Liked posts</span>
          </div>
          <div className={styles.navBarItem}>
            <button className={styles.post}>Post</button>
          </div>
        </nav>
        <p>hey</p>
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.homeWrapper}>Post</div>
        <div className={styles.homeWrapperfollow}>Post</div>
      </div>
    </div>
  );
};

export default Home;
