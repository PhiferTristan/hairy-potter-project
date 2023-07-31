// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { usePottery } from "./PotteryCatalog.js";

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", 0.25, "5 inches");
let vase = makePottery("vase", 3, "12 inches");
let pot = makePottery("pot", 5, "18 inches");
let jar = makePottery("jar", 8, "24 inches");
let cup = makePottery("cup", 0.2, "7 inches");

console.log(mug, vase, pot, jar, cup);

// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2300);
let firedVase = firePottery(vase, 2000);
let firedPot = firePottery(pot, 2100);
let firedJar = firePottery(jar, 2200);
let firedCup = firePottery(cup, 2200);

console.log(firedPot, firedMug, firedVase, firedJar, firedCup);

// Determine which ones should be sold, and their price

toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedPot);
toSellOrNotToSell(firedJar);
toSellOrNotToSell(firedCup);
let potteryCatalog = usePottery();
console.log(potteryCatalog);

// Invoke the component function that renders the HTML list
