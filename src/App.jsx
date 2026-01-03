import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  /*let foodItems = ["Dal", "Green Vegetables", "Ghee", "Roti", "Milk", "fruits"];*/

  const [foodItems, setFoodItems] = useState([]);

  const onKeyDownButton = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Container>
        <Container>
          <h1>Healthy Foods</h1>
        </Container>
        <FoodInput onKeyDownButton={onKeyDownButton}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
