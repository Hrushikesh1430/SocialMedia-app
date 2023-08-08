import XIcon from "../XIcon/XIcon";
import styles from "./logoX.module.css";
const LogoX = () => {
  return (
    <div className={styles.logoParent}>
      <XIcon className={styles.xicon} />
    </div>
  );
};

export default LogoX;
