import lavender from '../assets/lavender.jpg'
import peaceLilly from '../assets/peaceLilly.jpg'
import snakePlant from '../assets/snakePlant.jpg'
import spiderPlant from '../assets/spiderPlant.jpg'
import mint from '../assets/mint.jpg'
import aloeVera from '../assets/aloeVera.jpg'

const PRODUCTS = [
  {
    id: "p1",
    name: "Snake Plant",
    price: 18.0,
    desc: "A hardy air-purifying plant. Low light, low water.",
    groups: ["air-purifying"],
    img: snakePlant
  },
  {
    id: "p2",
    name: "Spider Plant",
    price: 14.5,
    desc: "Fast growing, great for hanging baskets. Air purifier.",
    groups: ["air-purifying"],
    img: spiderPlant
  },
  {
    id: "p3",
    name: "Lavender",
    price: 12.0,
    desc: "Aromatic and calming; needs sun.",
    groups: ["aromatic"],
    img: lavender
  },
  {
    id: "p4",
    name: "Peace Lily",
    price: 22.0,
    desc: "Easy-care flowering plant; helps purify air.",
    groups: ["air-purifying"],
    img: peaceLilly
  },
  {
    id: "p5",
    name: "Mint",
    price: 6.0,
    desc: "Aromatic herb, great for small planters and cooking.",
    groups: ["aromatic"],
    img: mint
  },
  {
    id: "p6",
    name: "Aloe Vera",
    price: 10.0,
    desc: "Medicinal succulent; bright light and sparse watering.",
    groups: ["medicinal", "air-purifying"],
    img: aloeVera
  }
];

export default PRODUCTS;
