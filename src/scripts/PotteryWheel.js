let potteryId = 1;

export const makePottery = (shape, weight, height) => {
  potteryId++;
  return {
    shape: shape,
    weight: weight,
    height: height,
    id: potteryId,
  };
};
