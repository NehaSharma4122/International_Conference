import { useContext } from "react";
import { DayContext } from "../Context/DayContext";
// import { useState, React } from "react";
// import { DayContext, DayContextProvider } from "../Context/DayContext";
import Day1 from "./Days/Day1";
import Day2 from "./Days/Day2";
import Day3 from "./Days/Day3";

const DayDiv = () => {
  // const [day, setday] = useState("");
  const { day, addDiv } = useContext(DayContext);

  const handleAddDiv = (content) => {
    // console.log("I am clicked");
    //console.log(content);
    addDiv(content);
  };

  return (
    <>
      <ul className="days">
        <li>
          <div className="day" onClick={() => handleAddDiv(<Day1 />)}>
            Day 1
          </div>
          <hr />
        </li>
        <li>
          <div className="day" onClick={() => handleAddDiv(<Day2 />)}>
            Day 2
          </div>
          <hr />
        </li>
        <li>
          <div className="day" onClick={() => handleAddDiv(<Day3 />)}>
            Day 3
          </div>
          <hr />
        </li>
      </ul>
      <div>{day}</div>
    </>
  );
};
export default DayDiv;
