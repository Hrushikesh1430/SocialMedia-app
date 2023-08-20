import styles from "./customModal.module.css";
import CloseIcon from "@mui/icons-material/Close";

export const CustomModal = (props) => {
  if (!props.modalOpen) {
    return null;
  }
  return (
    <>
      <div className={styles.modal} onClick={props.onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modalClose}>
            <button onClick={props.onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className={styles.modalBody}>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default CustomModal;
