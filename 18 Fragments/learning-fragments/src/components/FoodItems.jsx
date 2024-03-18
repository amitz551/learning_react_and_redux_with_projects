import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => {
            onBuyButton(item, event);
            console.log(`${item} bought`);
            alert(
              `${item} has been ordered🍔..Have paitence⌛! We'll be there in just few minutes🎉🎊..ENJOY OUR DELICIOUS👌.....and CHEERS❣️💫💥`
            );
          }}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
