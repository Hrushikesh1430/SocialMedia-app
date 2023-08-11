import styles from "./post.module.css";

import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Post = () => {
  return (
    <>
      <div className={styles.postItem}>
        <div className={styles.postProfile}>
          <img src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp" alt="post_image" />
        </div>
        <div className={styles.postInfo}>
          <div className={styles.userInfo}>
            <span className={styles.profileName}>Hrushikesh Tawde</span>
            <span className={styles.username}>@Skullbjoing</span>
            <span className={styles.date}>Sep 09, 2023</span>
          </div>
          <div className={styles.postContent}>
            <span>
              Mera juta hin japani sr pe lal topi. maagr dil hain hindustani.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
          </div>
          <div className={styles.postOptions}>
            <FavoriteBorderOutlinedIcon className={styles.fav} />
            <BookmarkBorderOutlinedIcon className={styles.book} />
            <ChatBubbleOutlineRoundedIcon className={styles.comment} />
            <ShareOutlinedIcon className={styles.share} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
