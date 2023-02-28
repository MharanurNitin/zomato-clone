import React from "react";
import "./filtercomponent.css";
function FilterComponent({ children }) {
  return (
    <div
      className="filtercomponent sub-container"
      style={{
        color: "#999",
        display: "flex",
        gap: ".25rem",
        alignItems: "center",
        cursor: "pointer",
        width: "fit-content",
      }}
    >
      {children}
    </div>
  );
}

export default FilterComponent;
