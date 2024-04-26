import { DayContextProvider } from "../Context/DayContext";
import Timeline from "../Components/Timeline";
import DayDiv from "../Components/DayDiv";
// import DayDiv from "../Components/DayDiv";

const Time = () => {
  return (
    <>
      <div className="big">
        <h2>Timeline</h2>
        <br />
        <hr />
      </div>
      <DayContextProvider>
        <DayDiv />
      </DayContextProvider>
      <Timeline />
    </>
  );
};

export default Time;
