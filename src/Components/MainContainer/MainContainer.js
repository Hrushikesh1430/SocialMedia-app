import { useContext, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SiderBar from "../SideBar/SideBar";

import styles from "./mainContainer.module.css";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import UserFollow from "../UserFollow/UserFollow";
import { DataContext } from "../../Context/DataContext";

import MenuIcon from "@mui/icons-material/Menu";

const MainContainer = (props) => {
  const { isloggedIn, setUserToken, setUser, setIsLoggedIn, user } = useContext(AuthContext);

  const { userState, dispatchUser, AppDevice } = useContext(DataContext);

  const navigate = useNavigate();

  const [toggleSidebar, setToggleSideBar] = useState(false);

  return (
    <>
      <div className={styles.homeParent}>
        <SiderBar toggleSidebar={toggleSidebar} setToggleSideBar={setToggleSideBar} />
        <div className={styles.homeContainer}>
          <div className={styles.homeWrapper}>
            <div className={styles.titlewrapper}>
              {AppDevice === 0 && <MenuIcon onClick={() => setToggleSideBar(true)} />}
              <span className={styles.pageTitle}>{props.title}</span>
              {AppDevice === 0 && (
                <div className={styles.searchBarParent}>
                  <SearchBar />
                </div>
              )}
            </div>
            <div className={styles.component}>{props.component}</div>
          </div>

          <div className={styles.followContainer}>
            <div className={styles.followWrapper}>
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
                          onClick={() => navigate(`/profile/${item.username}`)}
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
