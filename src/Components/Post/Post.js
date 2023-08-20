import styles from "./post.module.css";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";

const Post = ({ content, username, mainName, id, likes }) => {
  const { state, dispatch } = useContext(DataContext);

  const [loading, setLoading] = useState(false);

  const { userToken, user } = useContext(AuthContext);
  const likePostHandler = async (id, likes) => {
    setLoading(true);
    const likeStatus = likes.likedBy.find((item) => item.username === user.username);
    console.log(likeStatus);
    // const dislikeStatus = likes.dislikedBy.find((item) => item._id === user.id);

    // const post = {
    //   content: postContent.text.value,
    //   mainName: `${user.firstName} ${user.lastName}`,
    // };
    const url = likeStatus ? `/api/posts/dislike/${id}` : `/api/posts/like/${id}`;
    const config = {
      method: "POST",
      headers: {
        authorization: userToken,
      },
      body: {},
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();

      console.log(data);

      dispatch({ type: "UPDATE_POSTS", payLoad: data.posts });

      // toast.success(`Added to Wishlist`, {
      //   position: "bottom-right",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   theme: "light",
      // });
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className={styles.postItem}>
        <div className={styles.postProfile}>
          <img src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651554207/socialmedia/avatars/john-doe_gbkuda.webp" alt="post_image" />
        </div>
        <div className={styles.postInfo}>
          <div className={styles.userInfo}>
            <span className={styles.profileName}>{mainName}</span>
            <span className={styles.username}>@{username}</span>
            <span className={styles.date}>Sep 09, 2023</span>
          </div>
          <div className={styles.postContent}>
            <span>{content}</span>
          </div>
          <div className={styles.postOptions}>
            {/* <FavoriteIcon
              className={`${styles.fav} ${state.initialfind((wishListItem) => wishListItem._id === item._id) && styles.fill}`}
              sx={{ stroke: wishList.find((wishListItem) => wishListItem._id === item._id) ? "transparent" : "#000000", strokeWidth: 1 }}
            /> */}
            <FavoriteIcon
              className={`${styles.fav} ${likes.likedBy.find((item) => item.username === user.username) && styles.favfill} ${
                loading && styles.disable
              }`}
              sx={{ stroke: likes.likedBy.find((item) => item.username === user.username) ? "transparent" : "#ffffff", strokeWidth: 1 }}
              onClick={() => likePostHandler(id, likes)}
            />
            <BookmarkIcon className={`${styles.book}`} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
            <ChatBubbleIcon className={`${styles.comment}`} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
            <ShareIcon className={`${styles.share}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
