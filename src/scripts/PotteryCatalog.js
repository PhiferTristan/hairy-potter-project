const PotteryCatalog = [];

export const toSellOrNotToSell = (pot) => {
  if (pot.cracked) {
    return pot;
  } else {
    if (pot.weight >= 6) {
      pot.price = 40;
    } else {
      pot.price = 20;
    }
    PotteryCatalog.push(pot);
    return pot;
  }
};

export const usePottery = () => {
  return PotteryCatalog;
};
