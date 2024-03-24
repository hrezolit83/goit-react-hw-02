import css from "./Feedback.module.css";

const Feedback = ({ state, total, positive }) => {
  return (
    <div>
      <p className={css.text}>
        Good: <span className={css.good}>{state.good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.neutral}>{state.neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.bad}>{state.bad}</span>
      </p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>
        Positive: <span className={css.good}>{positive}%</span>
      </p>
    </div>
  );
};

export default Feedback;
