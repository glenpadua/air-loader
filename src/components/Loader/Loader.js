import React from "react";
import PropTypes from "prop-types";
import { config as defaultConfig } from "./config";
import "./Loader.css";

const propTypes = {
  /**
   * Notifications to be displayed
   */
  config: PropTypes.shape({
    /**
     * Count of rows to display
     */
    rows: PropTypes.number,
    /**
     * Rows to modify, accepts key as index of row to modify
     */
    rowModifiers: PropTypes.shape({
      indexOfRowToModify: PropTypes.shape({
        /**
         * Height of row - Default 25px
         */
        height: PropTypes.string,
        /**
         * Array of percentages, accepts any valid width value
         */
        boxes: PropTypes.arrayOf(PropTypes.string),
        /**
         * Indexes of box that should display the placeholder loading
         */
        placeHolders: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
    /**
     * Default height of all rows - Default 10px
     */
    rowHeight: PropTypes.string,
    /**
     * Height of gutter between each row - Default 10px
     */
    gutterHeight: PropTypes.string,
  }),
  /**
   * If `true` displays loading UI, `false` displays children
   */
  loading: PropTypes.bool.isRequired,
  /**
   * Anything wrapped in the Loader component
   */
  children: PropTypes.element,
};

export const Loader = ({ config = defaultConfig, loading, children }) => {
  if (!loading) {
    return children;
  }

  const renderRows = () => {
    const { rows, rowModifiers, gutterHeight, rowHeight } = config;
    let rowsToRender = [];
    // Loop through count of rows and render
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      rowsToRender.push(
        <React.Fragment key={rowIndex}>
          <div
            className="row"
            style={{ height: rowModifiers[rowIndex]?.height || rowHeight }}
          >
            {rowModifiers[rowIndex]?.boxes ? (
              rowModifiers[rowIndex].boxes.map((width, boxIndex) => (
                <div
                  key={width}
                  style={{
                    width,
                    // White box for everything other than
                    // what's included in the placeholders
                    backgroundColor: !rowModifiers[
                      rowIndex
                    ]?.placeHolders.includes(boxIndex)
                      ? "#fff"
                      : "transparent",
                  }}
                />
              ))
            ) : (
              // Defaults to rows with full width if boxes not specified
              <div style={{ width: "100%" }} />
            )}
          </div>
          {/* TODO: allow custom gutter heights for each row */}
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

Loader.propTypes = propTypes;
