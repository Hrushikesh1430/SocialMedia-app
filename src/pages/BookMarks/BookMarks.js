import { useContext } from "react";
import MainContainer from "../../Components/MainContainer/MainContainer";
import PostList from "../../Components/PostList/PostList";

import styles from "./bookmarks.module.css";
import { DataContext } from "../../Context/DataContext";
import LogoX from "../../Components/LogoX/LogoX";

const BookMarks = () => {
  const { bookState, state } = useContext(DataContext);

  const bookMarkedPosts = bookState.bookmarks.map(({ _id }) => state.initialPosts.find((item) => item._id === _id));

  const BookMarkWrapper = () => {
    return (
      <div className={styles.bookMarkWrapper}>
        {bookState.bookmarks.length > 0 ? (
          <PostList type="bookmarks" posts={bookMarkedPosts} />
        ) : (
          <div className={styles.notFound}>
            <span>You have not bookmarked any post yet.</span>
            <LogoX className={styles.bookmarkLogo} />
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <MainContainer component={<BookMarkWrapper />} title={"Bookmarks"} />
    </>
  );
};

export default BookMarks;
