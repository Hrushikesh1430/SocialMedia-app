import { useContext } from "react";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./liked.module.css";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import PostList from "../../Components/PostList/PostList";
import LogoX from "../../Components/LogoX/LogoX";

const Liked = () => {
  const { bookState, state } = useContext(DataContext);

  const { user } = useContext(AuthContext);
  const likedPosts = state.filteredPosts.filter((item) => item.likes.likedBy.find((item) => item.username === user.username) !== undefined);
  // const likedPosts = likePostStatus.filter((item) => item && item);

  const LikedWrapper = () => {
    return (
      <div className={styles.LikedWrapper}>
        <div className={styles.pageTitle}>Liked posts</div>
        {likedPosts.length > 0 ? (
          <PostList type="liked" posts={likedPosts} />
        ) : (
          <>
            <div className={styles.notFound}>
              <span>You have not liked any post yet.</span>
              <LogoX className={styles.bookmarkLogo} />
            </div>
          </>
        )}
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
