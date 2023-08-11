import styles from "./home.module.css";

import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

import Post from "../../Components/Post/Post";
import MainContainer from "../../Components/MainContainer/MainContainer";

const Home = () => {
  const HomeWrapper = () => {
    return (
      <>
        <div className={styles.homeTopContainer}>
          <div className={styles.pageTitle}>Home</div>
          <div className={styles.filterContainer}>
            <div className={`${styles.trending} ${styles.active}`}>
              <span>Trending</span>
            </div>
            <div className={styles.latest}>
              <span>Latest</span>
            </div>
          </div>
          <div className={styles.postContainer}>
            <div className={styles.postWrapper}>
              <div className={styles.profileImage}>
                <div className={styles.profileAvatar}>
                  <img
                    src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554256/socialmedia/avatars/jane-doe_il3cvx.webp"
                    alt="profile_image"
                  />
                </div>
              </div>
              <div className={styles.postInput}>
                <textarea placeholder="What is happening?"></textarea>
                <div className={styles.uploadOptions}>
                  <div className={styles.photoContainer}>
                    <AddPhotoAlternateOutlinedIcon className={styles.addPhoto} />
                    <EmojiEmotionsOutlinedIcon className={styles.emoji} />
                  </div>
                  <div className={styles.postButton}>
                    <button className={styles.post}>Post</button>
                  </div>
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
      </>
    );
  };

  return <MainContainer component={<HomeWrapper />}></MainContainer>;
};

export default Home;
