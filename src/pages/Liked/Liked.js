import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./liked.module.css";

const Liked = () => {
  const LikedWrapper = () => {
    return (
      <div className={styles.LikedWrapper}>
        <div className={styles.pageTitle}>Liked posts</div>
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
      <MainContainer component={<LikedWrapper />} />
    </>
  );
};

export default Liked;
