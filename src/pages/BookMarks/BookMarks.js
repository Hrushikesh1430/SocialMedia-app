import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./bookmarks.module.css";

const BookMarks = () => {
  const BookMarkWrapper = () => {
    return (
      <div className={styles.bookMarkWrapper}>
        <div className={styles.pageTitle}>Bookmarks</div>
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
      <MainContainer component={<BookMarkWrapper />} />
    </>
  );
};

export default BookMarks;
