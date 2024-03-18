import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Containers";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Salaad",
    "Green Vegetable",
    "Roti",
  ]);

  // if (foodItems.length === 0) {
  //   return <h3>I'm still hungry.</h3>;
  // }
  // let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null;

  // // let textStateArr = useState("Food Item Entered by user");
  // // let textToShow = textStateArr[0];
  // // let setTextState = textStateArr[1];
  // let [textToShow, setTextState] = useState("Food Item Entered by user"); //destructuring of array
  // console.log(`Current value of textState: ${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      //event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food Value entered is " + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
