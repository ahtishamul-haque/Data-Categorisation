import React, { useState } from "react";
// path from components folder to src
import categoryMap from "../categories.json"; 

function InputForm({ onAdd }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  // detect category by searching keywords (first match wins)
  const detectCategory = (itemName) => {
    if (!itemName) return "Other";
    const lower = itemName.toLowerCase().trim();

    for (const [category, keywords] of Object.entries(categoryMap)) {
      if (!Array.isArray(keywords)) continue;
      // check if any keyword appears in the item string
      if (keywords.some((kw) => kw && lower.includes(kw.toLowerCase()))) {
        return category;
      }
    }
    return "Other";
  };

  const handleSubmit = () => {
    if (!item || !price) return;
    const category = detectCategory(item);
    onAdd(category, price);
    setItem("");
    setPrice("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter item (e.g., Apple)"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter price (e.g., 199)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={!item || !price}>
        Add
      </button>
    </div>
  );
}

export default InputForm;
