import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles[`kg-item`]} list-group-item ${bought && "active"}`}
    >
      <span className={styles[`kg-span`]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick={() => {
        //   // console.log(`${foodItem} bought`);
        //   // alert(`"${foodItem} bought!"`);
        //   handleBuyButtonClick(foodItem);
        // }}//call by value ...have to also write foodItem in the above function like const handleBuyButtonClick = (foodItem) => {

        //onClick={handleBuyButtonClick} //call by reference

        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
