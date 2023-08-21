import LogoX from "../../Components/LogoX/LogoX";
import MainContainer from "../../Components/MainContainer/MainContainer";

import PostList from "../../Components/PostList/PostList";

import styles from "./explore.module.css";

const Explore = () => {
  const ExploreWrapper = () => {
    return (
      <div className={styles.ExploreWrapper}>
        <div className={styles.pageTitle}>Explore</div>
        <PostList />
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
