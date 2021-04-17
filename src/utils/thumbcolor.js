const item_colors = ["red", "blue", "green", "violet"];

export const getThumbColor = (id) => {
  return item_colors[id % item_colors.length];
};
