import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions/Actions";
import './AddEntry.css'

const AddEntry = () => {
  const [item, setItem] = useState("");
  const [calories, setCalories] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry({ item, calories }));
    setItem("");
    setCalories("");
  };
  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="description"
            className="form-control"
            value={item}
            placeholder="Food Item"
            onChange={(e) => setItem(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="Amount"
            className="form-control"
            value={calories}
            placeholder="Calories"
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <button className="btn" disabled={!(item && calories)}>Add Entry</button>
      </form>
    </div>
  );
};
export default AddEntry;
