import React, { useState, FC } from "react";
import { FaTrash } from "react-icons/fa";
import { Ingredient } from "../types/Ingredient";

interface IngredientComponentProps {
  ingredientType: string;
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  allIngredients: string[];
  ingredients: Ingredient[];
  addIngredient: (
    ingredientName: string,
    quantity: string,
    ingredientType: string
  ) => void;
  handleDelete: (ingredientId: string) => void;
  clearSelectedIngredient: () => void;
}

const IngredientComponent: FC<IngredientComponentProps> = ({
  ingredientType,
  quantity,
  setQuantity,
  allIngredients,
  ingredients,
  addIngredient,
  handleDelete,
  clearSelectedIngredient,
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(
    null
  );

  const handleAddIngredient = () => {
    if (selectedIngredient) {
      addIngredient(selectedIngredient, quantity, ingredientType);
      clearSelectedIngredient();
      setSelectedIngredient(null);
    }
  };

  return (
    <div className="ingredient-container">
      <div className={`ingredient ${ingredientType}`}>
        <div>
          <label htmlFor={`${ingredientType}-quantity`}>Quantity</label>
          <br />
          <input
            id={`${ingredientType}-quantity`}
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <br />
          <label htmlFor={`${ingredientType}-dd`}>Type</label>
          <br />
          <select
            id={`${ingredientType}-dd`}
            required
            value={selectedIngredient || ""}
            onChange={(e) => setSelectedIngredient(e.target.value)}
          >
            <option value="">Select an ingredient</option>
            {allIngredients.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <br />
          <button onClick={handleAddIngredient}>Add</button>
        </div>
        <div>
          <h3>Current {ingredientType}</h3>
          {ingredients.map((ingredient) => (
            <div key={ingredient._id}>
              <span>{ingredient.name}</span>
              <span>{ingredient.amount}</span>
              <button onClick={() => handleDelete(ingredient._id)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientComponent;
