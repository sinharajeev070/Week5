import { useSelector } from "react-redux";
import Entry from "./Entry";
import './Entries.css'

const Entries = () => {
  const entries = useSelector((state) => state.calorie);
  console.log(entries);
  return (
    <div className="mt-3">
      <p className="entries">Entries</p>
      <hr />
      <div className="listgroup">
        {entries.map((el) => (
          <Entry entry={el} />
        ))}
      </div>
    </div>
  );
};
export default Entries;
