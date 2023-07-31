export const firePottery = (pot, firingTemp) => {
    pot.fired = true;
    pot.cracked = firingTemp > 2200 ? true : false
    return pot
}