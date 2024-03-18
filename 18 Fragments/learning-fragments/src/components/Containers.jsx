import styles from "./Containers.module.css";

const Containers = ({ children }) => {
  return <div className={styles.containers}>{children}</div>;
};

export default Containers;
