import { useState } from "react";
import data from "./data";
import "./Accordion.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultipleSelection = (getCurrentId) => {
    const cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(cpyMultiple);
    findIndexOfCurrentId === -1
      ? cpyMultiple.push(getCurrentId)
      : cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  };

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordion container">
        {data.map((dataItem) => (
          <div className="item container" key={dataItem.id}>
            <div
              onClick={
                enableMultipleSelection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="title">
              <h3 className="fs-5">{dataItem.question}</h3>
              <span>+</span>
            </div>
            {selected === dataItem.id ||
            multiple.indexOf(dataItem.id) !== -1 ? (
              <div className="content small ">{dataItem.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
