import { useState } from "react";

const useVisualMode = initial => {
  //Sets states
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, error) => {

    //If there is an error, places the new mode in the correct position
    if (error) {
      const newHistory = [...history];
      newHistory.pop();
      
      setHistory(prevHistory => [...newHistory, newMode]);
      setMode(newMode);
    } else {
      //Change history to a copy of the history with newMode at the end.
      setHistory(prevHistory => [...prevHistory, newMode]);
      //Asign mode to new mode
      setMode(newMode);
    }
  };

  //**Reverst to previou mode in history */
  const back = () => {
    //Checks if history has atleast two items
    if (history.length > 1) {
      //sets mode too one behind the end element
      setMode(history[history.length - 2]);
      //sets history to a copy of history minus the end
      setHistory(prevHistory => prevHistory.slice(0, prevHistory.length - 1));
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;