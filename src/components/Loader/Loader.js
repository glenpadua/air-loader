import React from "react";
import "./Loader.css";

export const Loader = ({ config, loading, children }) => {
  if (!loading) {
    return children;
  }

  const renderRows = () => {
    const { rows, rowModifiers, gutterHeight } = config;
    let rowsToRender = [];

    for (let i = 0; i < rows; i++) {
      rowsToRender.push(
        <React.Fragment key={i}>
          <div className="row" style={{ height: rowModifiers[i]?.height }}>
            {rowModifiers[i]?.boxes ? (
              rowModifiers[i].boxes.map((width, index) => (
                <div
                  key={width}
                  style={{
                    width,
                    backgroundColor: !rowModifiers[i]?.placeHolders.includes(
                      index
                    )
                      ? "#fff"
                      : "transparent",
                  }}
                />
              ))
            ) : (
              <div style={{ width: "100%" }} />
            )}
          </div>
          <div className="row gutter" style={{ height: gutterHeight }} />
        </React.Fragment>
      );
    }
    return rowsToRender;
  };

  return (
    <div className="wrapper">
      <div className="content">{renderRows()}</div>
    </div>
  );
};
