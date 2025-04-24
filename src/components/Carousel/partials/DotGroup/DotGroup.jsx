import React from "react";
import "./DotGroup.css";

const DotGroup = () => {
  const dots = Array.from({ length: 12 });

  return (
    <div className="dot-container">
      {dots.map((_, i) => (
        <React.Fragment key={i}>
          <div className="dot">•</div>
          {(i + 1) % 4 === 0 && i !== 11 && <span className="space"> </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DotGroup;
