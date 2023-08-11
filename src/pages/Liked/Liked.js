import MainContainer from "../../Components/MainContainer/MainContainer";

import styles from "./liked.module.css";

const Liked = () => {
  const LikedWrapper = () => {
    return (
      <div className={styles.LikedWrapper}>
        <div className={styles.pageTitle}>Explore</div>
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
