import { useContext } from "react";
import LogoX from "../../Components/LogoX/LogoX";
import MainContainer from "../../Components/MainContainer/MainContainer";

import PostList from "../../Components/PostList/PostList";

import styles from "./explore.module.css";
import { DataContext } from "../../Context/DataContext";

const Explore = () => {
  const { state } = useContext(DataContext);
  const ExploreWrapper = () => {
    return (
      <div className={styles.ExploreWrapper}>
        <div className={styles.pageTitle}>Explore</div>
        <PostList posts={state.initialPosts} />
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
