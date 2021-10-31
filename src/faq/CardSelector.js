import classNames from "classnames";
import React from "react";
import "./FAQ.css";

const CardSelector = React.memo(function CardSelectorFn({
  selected,
  title,
  text,
  onClick,
}) {
  return (
    <div
      className={classNames("card-selector", { "card-selected": selected })}
      onClick={onClick}
    >
      <h5>{title}</h5>
      <p className="large-screen-only">{text}</p>
    </div>
  );
});

export default CardSelector;
