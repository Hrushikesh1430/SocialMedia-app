import styles from "./home.module.css";
import * as dayjs from "dayjs";

import Post from "../../Components/Post/Post";
import MainContainer from "../../Components/MainContainer/MainContainer";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import PostInput from "../../Components/PostInput/PostInput";
import { AuthContext } from "../../Context/AuthContext";
import PostList from "../../Components/PostList/PostList";

const Home = () => {
  const { state, dispatch } = useContext(DataContext);

  const { user } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState(0);

  const onChangeTab = (tab) => {
    if (tab === "trending") {
      dispatch({ type: "FILTER_LIKES", payLoad: "" });
      setActiveTab(0);
    } else {
      dispatch({ type: "FILTER_BY_DATE", payLoad: "" });
      setActiveTab(1);
    }
  };

  console.log(dayjs().toJSON());
  useEffect(() => {
    activeTab === 0 ? dispatch({ type: "FILTER_LIKES", payLoad: "" }) : dispatch({ type: "FILTER_BY_DATE", payLoad: "" });
  }, [state.initialPosts]);

  const HomeWrapper = () => {
    return (
      <>
        <div className={styles.homeTopContainer}>
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
                  <img src={user.avatarURL} alt="profile_image" />
                </div>
              </div>
              <div className={styles.postInput}>
                <PostInput isEdit={false} postId="" setModal={() => false} />
              </div>
            </div>
          </div>
          <PostList posts={state.filteredPosts} />
        </div>
      </>
    );
  };

  return <MainContainer component={<HomeWrapper />} title={"Home"}></MainContainer>;
};

export default Home;
