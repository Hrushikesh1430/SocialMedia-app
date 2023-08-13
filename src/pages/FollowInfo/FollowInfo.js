import { useState } from "react";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Post from "../../Components/Post/Post";

import styles from "./followInfo.module.css";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { useLocation, useNavigate } from "react-router-dom";

const FollowInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const FollowInfoWrapper = () => {
    return (
      <div className={styles.FollowInfoWrapper}>
        <div className={styles.pageTitle}>
          <div className={styles.backArrow}>
            <ArrowBackOutlinedIcon onClick={() => navigate("/profile")} />
          </div>
          <div className={styles.userFollowInfo}>
            <div className={styles.userFullName}>
              <span>Madhavi Tawde</span>
            </div>
            <div className={styles.userMainname}>
              <span>@madhavit</span>
            </div>
          </div>
        </div>
        <div className={styles.filterContainer}>
          <div className={`${styles.following} ${path === "/following" ? styles.active : ""}`} onClick={() => navigate("/following")}>
            <span>Following</span>
          </div>
          <div className={`${styles.followers} ${path === "/followers" && styles.active}`} onClick={() => navigate("/followers")}>
            <span>Followers</span>
          </div>
        </div>
        <div className={styles.postListContainer}></div>
      </div>
    );
  };
  return (
    <>
      <MainContainer component={<FollowInfoWrapper />} />
    </>
  );
};

export default FollowInfo;
