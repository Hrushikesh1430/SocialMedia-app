import styles from "./customLoader.module.css";
export const CustomLoader = (props) => {
  console.log(props.loading);
  if (!props.loading) {
    return null;
  }
  return <span className={`${styles.loader} ${props.className}`} width={props.width} height={props.height}></span>;
};
