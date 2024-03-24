import css from "./Feedback.module.css";

const Feedback = ({ data, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={css.text}>
        Good: <span className={css.good}>{data.good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.neutral}>{data.neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.bad}>{data.bad}</span>
      </p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>
        Positive: <span className={css.good}>{positiveFeedback}%</span>
      </p>
    </div>
  );
};

export default Feedback;
