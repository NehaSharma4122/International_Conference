import { createContext, useState } from "react";
import Day1 from "../Components/Days/Day1"

export const DayContext = createContext();

export const DayContextProvider = ({children}) =>{
    const [day, setday] = useState(<Day1 />);
    const addDiv = (content) =>{
        // setday([...day, content]);
        setday(content);
        console.log(day);
    };

    return(
        <DayContext.Provider value={{day, addDiv}}>
            {children}
        </DayContext.Provider>
    );
};

// export default {DayContextProvider};