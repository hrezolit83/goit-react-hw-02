import css from "./Options.module.css";

const Options = ({ update, total, reset }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => update("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => update("bad")}>
        Bad
      </button>
      {total > 0 ? (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
