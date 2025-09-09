import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import CardItem from "./components/CardItem";

function App() {
  const [categories, setCategories] = useState({});

  const handleAdd = (category, price) => {
    setCategories((prev) => ({
      ...prev,
      [category]: (prev[category] || 0) + parseInt(price),
    }));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <InputForm onAdd={handleAdd} />

      <div className="card-container">
        {Object.entries(categories).map(([category, total], index) => (
          <CardItem key={index} category={category} total={total} />
        ))}
      </div>
    </div>
  );
}

export default App;
