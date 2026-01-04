import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
import { FaAppleAlt } from "react-icons/fa";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDownButton = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value.trim();
      if (newFoodItem === "") return;

      event.target.value = "";
      setFoodItems([...foodItems, newFoodItem]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        {/* HEADER */}
        <div className="text-center mb-4">
          <FaAppleAlt size={40} className="text-success mb-2" />
          <h2 className="fw-bold">Healthy Foods</h2>
          <p className="text-muted">Track your healthy eating habits 🥗</p>
        </div>

        {/* INPUT */}
        <FoodInput onKeyDownButton={onKeyDownButton} />

        {/* EMPTY MESSAGE */}
        <ErrorMessage items={foodItems} />

        {/* LIST */}
        <FoodItems items={foodItems} />
      </div>
    </div>
  );
}

export default App;
