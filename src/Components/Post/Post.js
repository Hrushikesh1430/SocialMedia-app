import styles from "./post.module.css";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import { AuthContext } from "../../Context/AuthContext";
import CustomModal from "../CustomModal/CustomModal";
import PostInput from "../PostInput/PostInput";

const Post = ({ content, username, mainName, id, likes, setDropDownId, dropDownId }) => {
  const { state, userState, bookState, dispatch, dispatchUser, dispatchBook } = useContext(DataContext);

  const [loading, setLoading] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [postInfo, setPostInfo] = useState({
    content: "",
    id: "",
  });
  const { userToken, user } = useContext(AuthContext);

  const dropDownHandler = (postId) => {
    setDropDownId((dropDownId) => (postId === dropDownId ? null : postId));
  };

  const likePostHandler = async (id, likes) => {
    setLoading(true);
    const likeStatus = likes.likedBy.find((item) => item.username === user.username);

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
  const BookMarkHandler = async (id) => {
    setLoading(true);
    const bookmarkStatus = bookState.bookmarks.find((item) => item._id === id);
    const url = bookmarkStatus ? `/api/users/remove-bookmark/${id}` : `/api/users/bookmark/${id}`;
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
      dispatchBook({ type: "FETCH_BOOKMARKS", payLoad: data.bookmarks });
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
  const editHandler = (id, content) => {
    setDropDownId(null);
    setPostInfo((postInfo) => ({ ...postInfo, id: id, content: content }));
    setEditModal(true);
  };
  const deleteHandler = async (id) => {
    setDropDownId(null);

    const url = `/api/posts/${id}`;
    const config = {
      method: "DELETE",
      headers: {
        authorization: userToken,
      },
      body: {},
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();
      console.log(data);

      dispatch({ type: "CREATE_POST", payLoad: data.posts });

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
      console.log(e);
    } finally {
      // setWishButtonDisabled(false);
    }
  };

  const userInfo = userState.users.find((item) => item.username === username);

  return (
    <>
      <CustomModal onClose={() => setEditModal(false)} modalOpen={editModal}>
        <div className={styles.editContainer}>
          <PostInput postInfo={postInfo} isEdit={true} setModal={setEditModal} />
        </div>
      </CustomModal>
      <div className={styles.postItem}>
        <div className={styles.postProfile}>
          <img src={userInfo.avatarURL} alt="post_image" />
        </div>
        <div className={styles.postInfo}>
          <div className={styles.userInfo}>
            <span className={styles.profileName}>
              {userInfo.firstName} {userInfo.lastName}
            </span>
            <span className={styles.username}>@{userInfo.username}</span>
            <span className={styles.date}>Sep 09, 2023</span>
            {user.username === userInfo.username && (
              <span className={styles.userMore} onClick={() => dropDownHandler(id)}>
                ...
              </span>
            )}

            {dropDownId === id && (
              <div className={styles.dropdown}>
                <span className={styles.dropdownItem} onClick={() => editHandler(id, content)}>
                  Edit
                </span>
                <span className={styles.dropdownItem} onClick={() => deleteHandler(id)}>
                  Delete
                </span>
              </div>
            )}
          </div>
          <div className={styles.postContent}>
            <span>{content}</span>
          </div>
          <div className={styles.postOptions}>
            <FavoriteIcon
              className={`${styles.fav} ${likes.likedBy.find((item) => item.username === user.username) && styles.favfill} ${
                loading && styles.disable
              }`}
              sx={{ stroke: likes.likedBy.find((item) => item.username === user.username) ? "transparent" : "#ffffff", strokeWidth: 1 }}
              onClick={() => likePostHandler(id, likes)}
            />
            <BookmarkIcon
              className={`${styles.book} ${bookState.bookmarks.find((item) => item._id === id) && styles.bookFill} ${loading && styles.disable}`}
              sx={{ stroke: bookState.bookmarks.find((item) => item._id === id) ? "transparent" : "#ffffff", strokeWidth: 1 }}
              onClick={() => BookMarkHandler(id)}
            />
            <ChatBubbleIcon className={`${styles.comment}`} sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
            <ShareIcon className={`${styles.share}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
