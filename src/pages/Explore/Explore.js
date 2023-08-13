import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./explore.module.css";

const Explore = () => {
  const ExploreWrapper = () => {
    return (
      <div className={styles.ExploreWrapper}>
        <div className={styles.pageTitle}>Explore</div>
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
      <MainContainer component={<ExploreWrapper />} />
    </>
  );
};

export default Explore;
