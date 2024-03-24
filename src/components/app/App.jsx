import "./App.css";
import { useState, useEffect } from "react";
import Description from "../description/Description";
import Options from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "../notification/Notification";

function App() {
  const [state, setState] = useState(() => {
    const saveFeedbacks = window.localStorage.getItem("save-feedbacks");
    if (saveFeedbacks) {
      return JSON.parse(saveFeedbacks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setState({
      ...state,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("save-feedbacks", JSON.stringify(state));
  }, [state]);

  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        callback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          data={state}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
