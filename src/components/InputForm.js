import React, { useState } from "react";

function InputForm({ onAdd }) {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {
    if (category && item && price) {
      onAdd(category, price);
      setItem("");
      setPrice("");
      setCategory("");
    }
  };

  return (
    <div className="input-section">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Select Category
        </option>
        <option value="Fruit">Fruit</option>
        <option value="Groceries">Groceries</option>
        <option value="Travel">Travel</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="text"
        placeholder="Enter item (e.g., Apple)"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={!category || !item || !price}>
        Add
      </button>
    </div>
  );
}

export default InputForm;
