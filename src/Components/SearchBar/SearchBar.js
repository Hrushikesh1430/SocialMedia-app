import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";

import { useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const { userState, dispatchUser } = useContext(DataContext);
  const [searchBoxVisible, setSearcbBoxVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    const searchValue = value.trim().toLowerCase();
    searchValue.length > 0 ? setSearcbBoxVisible(true) : setSearcbBoxVisible(false);
    dispatchUser({ type: "SEARCH_USERS", payLoad: searchValue });
  };
  return (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputWrapper}>
          <input
            placeholder="Search Users"
            type="text"
            onChange={(e) => {
              setSearchInput(e.target.value);
              handleSearchChange(e.target.value);
            }}
            value={searchInput}
            className={styles.searchInput}
          />
          <SearchOutlinedIcon
            className={styles.closeSearch}
            onClick={() => {
              setSearcbBoxVisible(false);
              setSearchInput("");
            }}
          />

          {searchBoxVisible && (
            <div className={styles.SearchBox}>
              {userState.searchUsers.length > 0 ? (
                <>
                  {userState.searchUsers.map((item) => (
                    <div
                      className={styles.user}
                      onClick={() => {
                        setSearcbBoxVisible(false);
                        navigate(`/profile/${item.username}`);
                        setSearchInput("");
                      }}
                    >
                      <div className={styles.userImage}>
                        <img src={item.avatarURL} alt="userImage" />
                      </div>
                      <div className={styles.userFollowInfo}>
                        <div className={styles.userFullName}>
                          <span>
                            {item.firstName} {item.lastName}
                          </span>
                        </div>
                        <div className={styles.userMainname}>
                          <span>@{item.username}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <span className={styles.notFound}>We couldn't find item of your choice.</span>
              )}
              {/* {state.searchList.length > 0 ? (
                state.searchList.map((item) => (
                  <div
                    className={styles.searchItem}
                    onClick={() => {
                      setSearcbBoxVisible(false);
                      navigate(`/product/${item._id}`);
                      setSearchInput("");
                    }}
                  >
                    <img src={item.image} alt="searchImage" className={styles.searchImage} />
                    <div className={styles.searchInfo}>
                      <span className={styles.brand}>{item.brand}</span>
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))
              ) : ( */}

              {/* )} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
