import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

import styles from "./postInput.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { DataContext } from "../../Context/DataContext";

const PostInput = () => {
  const { state, dispatch } = useContext(DataContext);
  const { userToken, user } = useContext(AuthContext);

  const [postContent, setPostContent] = useState({
    text: {
      value: "",
    },
  });

  const onChangeText = (value) => {
    setPostContent((postContent) => ({ ...postContent, text: { ...postContent.text, value: value } }));
  };

  const postTweet = async () => {
    const post = {
      content: postContent.text.value,
      mainName: `${user.firstName} ${user.lastName}`,
    };
    const url = "/api/posts";
    const config = {
      method: "POST",
      headers: {
        authorization: userToken,
      },
      body: JSON.stringify({ postData: post }),
    };
    try {
      const response = await fetch(url, config);
      const data = await response.json();

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
    } finally {
      // setWishButtonDisabled(false);
    }
  };

  return (
    <>
      <textarea placeholder="What is happening?" value={postContent.text.value} onChange={(e) => onChangeText(e.target.value)}></textarea>
      <div className={styles.uploadOptions}>
        <div className={styles.photoContainer}>
          <AddPhotoAlternateOutlinedIcon className={styles.addPhoto} />
          <EmojiEmotionsOutlinedIcon className={styles.emoji} />
        </div>
        <div className={styles.postButton}>
          <button className={`${styles.post} ${postContent.text.value === "" && styles.disable}`} onClick={() => postTweet()}>
            Post
          </button>
        </div>
      </div>
    </>
  );
};

export default PostInput;
