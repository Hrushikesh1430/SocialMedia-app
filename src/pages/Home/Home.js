import styles from "./home.module.css";

import Post from "../../Components/Post/Post";
import MainContainer from "../../Components/MainContainer/MainContainer";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import PostInput from "../../Components/PostInput/PostInput";

const Home = () => {
  const { state, dispatch } = useContext(DataContext);

  const [activeTab, setActiveTab] = useState(0);

  const onChangeTab = (tab) => {
    if (tab === "trending") {
      dispatch({ type: "FILTER_LIKES", payLoad: "" });
      setActiveTab(0);
    } else {
      setActiveTab(1);
    }
  };

  useEffect(() => {
    activeTab === 0 && dispatch({ type: "FILTER_LIKES", payLoad: "" });
  }, [state.filteredPosts]);

  const HomeWrapper = () => {
    return (
      <>
        <div className={styles.homeTopContainer}>
          <div className={styles.pageTitle}>Home</div>
          <div className={styles.filterContainer}>
            <div className={`${styles.trending} ${activeTab === 0 && styles.active}`} onClick={() => onChangeTab("trending")}>
              <span>Trending</span>
            </div>
            <div className={`${styles.latest} ${activeTab === 1 && styles.active}`} onClick={() => onChangeTab("latest")}>
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
                <PostInput />
              </div>
            </div>
          </div>
          <div className={styles.postListContainer}>
            {state.filteredPosts.map((item) => (
              <Post content={item.content} username={item.username} mainName={item.mainName} id={item._id} likes={item.likes} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return <MainContainer component={<HomeWrapper />}></MainContainer>;
};

export default Home;
