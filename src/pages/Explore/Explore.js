import MainContainer from "../../Components/MainContainer/MainContainer";

import styles from "./explore.module.css";

const Explore = () => {
  const ExploreWrapper = () => {
    return (
      <div className={styles.ExploreWrapper}>
        <div className={styles.pageTitle}>Explore</div>
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
