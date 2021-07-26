const counter = (arr) => {
  let stats = {};
  for (let elem of arr) {
    stats[elem.status] = stats[elem.status] + 1 || 1;
  }
  return stats;
};

export default counter;
