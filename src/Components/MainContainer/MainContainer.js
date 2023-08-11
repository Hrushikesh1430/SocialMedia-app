import SearchBar from "../SearchBar/SearchBar";
import SiderBar from "../SideBar/SideBar";

import styles from "./mainContainer.module.css";

const MainContainer = (props) => {
  return (
    <>
      <div className={styles.homeParent}>
        <SiderBar />
        <div className={styles.homeContainer}>
          <div className={styles.homeWrapper}>{props.component}</div>

          <div className={styles.followContainer}>
            <div className={styles.followWrapper}>
              <SearchBar />
              <div className={styles.suggestions}>
                <span className={styles.suggestionTitle}>Who to Follow</span>
                <div className={styles.followMain}>
                  <div className={styles.user}>
                    <div className={styles.userImage}>
                      <img
                        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                        alt="userImage"
                      />
                    </div>
                    <div className={styles.userFollowInfo}>
                      <div className={styles.userFullName}>
                        <span>Madhavi Tawde</span>
                      </div>
                      <div className={styles.userMainname}>
                        <span>@madhavit</span>
                      </div>
                    </div>
                    <div className={styles.userFollow}>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className={styles.user}>
                    <div className={styles.userImage}>
                      <img
                        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                        alt="userImage"
                      />
                    </div>
                    <div className={styles.userFollowInfo}>
                      <div className={styles.userFullName}>
                        <span>Madhavi Tawde</span>
                      </div>
                      <div className={styles.userMainname}>
                        <span>@madhavit</span>
                      </div>
                    </div>
                    <div className={styles.userFollow}>
                      <button>Follow</button>
                    </div>
                  </div>
                  <div className={styles.user}>
                    <div className={styles.userImage}>
                      <img
                        src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
                        alt="userImage"
                      />
                    </div>
                    <div className={styles.userFollowInfo}>
                      <div className={styles.userFullName}>
                        <span>Madhavi Tawde</span>
                      </div>
                      <div className={styles.userMainname}>
                        <span>@madhavit</span>
                      </div>
                    </div>
                    <div className={styles.userFollow}>
                      <button>Follow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default MainContainer;
