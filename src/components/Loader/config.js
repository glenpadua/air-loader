// Default config is nothing is passed
export const config = {
  rows: 6,
  rowModifiers: {
    0: {
      height: "150px",
      boxes: ["60%", "40%"],
      placeHolders: [0],
    },
    5: {
      height: "25px",
      boxes: ["40%", "60%"], // Ideally adds up to 100%
      placeHolders: [0],
    },
  },
};
