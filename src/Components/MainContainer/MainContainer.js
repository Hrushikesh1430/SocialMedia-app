import { useContext, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SiderBar from "../SideBar/SideBar";

import styles from "./mainContainer.module.css";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import UserFollow from "../UserFollow/UserFollow";
import { DataContext } from "../../Context/DataContext";

const MainContainer = (props) => {
  const { isloggedIn, setUserToken, setUser, setIsLoggedIn, user } = useContext(AuthContext);

  const { userState, dispatchUser } = useContext(DataContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   getUsersAPI();
  // }, []);

  return (
    <>
      <div className={styles.homeParent}>
        <SiderBar />
        <div className={styles.homeContainer}>
          <div className={styles.homeWrapper}>{props.component}</div>

          <div className={styles.followContainer}>
            <div className={styles.followWrapper}>
              <button
                onClick={() => {
                  localStorage.removeItem("userToken");
                  localStorage.removeItem("loggedUser");
                  setUserToken("");
                  setUser({});
                  setIsLoggedIn(false);

                  navigate("/login");
                }}
              >
                Logout
              </button>
              <SearchBar />
              <div className={styles.suggestions}>
                <span className={styles.suggestionTitle}>Who to Follow</span>
                <div className={styles.followMain}>
                  {userState.users.map(
                    (item) =>
                      item.username !== user.username && (
                        <UserFollow
                          avatarURL={item.avatarURL}
                          firstName={item.firstName}
                          lastName={item.lastName}
                          username={item.username}
                          followers={item.followers}
                          following={item.following}
                          id={item._id}
                        />
                      )
                  )}
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
