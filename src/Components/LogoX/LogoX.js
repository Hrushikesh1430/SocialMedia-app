import XIcon from "../XIcon/XIcon";
import styles from "./logoX.module.css";
const LogoX = ({ className }) => {
  return (
    <div className={styles.logoParent}>
      <XIcon className={`${styles.xicon} ${className}`} />
    </div>
  );
};

export default LogoX;
