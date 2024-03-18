import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <div className={styles.buttonsContainer}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
