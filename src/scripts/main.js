// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./kiln.js"

// Make 5 pieces of pottery at the wheel

let mug = makePottery("mug", "1/4th lb", "5 inches");
let vase = makePottery("vase", "3 lbs", "12 inches");
let pot = makePottery("pot", "5 lbs", "18 inches");
let jar = makePottery("jar", "8 lbs", "24 inches");
let cup = makePottery("cup", "1/5th lb", "7 inches");

console.log(mug, vase, pot, jar, cup);

// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2300)
let firedVase = firePottery(vase, 2000)
let firedPot = firePottery(pot, 2100)
let firedJar = firePottery(jar, 2300)
let firedCup = firePottery(cup, 2200)

console.log(firedPot, firedMug, firedVase, firedJar, firedCup)

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
