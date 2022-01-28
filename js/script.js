// question 1

const instrument = "guitar";
console.log(instrument);

// question 2

const button = document.querySelector("button.login");
console.dir(button);

// question 3

const instruments = [
  {
    type: "guitar",
    colour: "red",
  },
  {
    type: "piano",
    colour: "black",
  },
];

console.table(instrument);

// question 4
const name = "Percival";
const age = 13;

// question 5

let total = 0;
total = total + 10;

// question 6

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// question 7

const firstName = "Florence";
let introduction = `Hello, my name is ${firstName}.`;
console.log(introduction);

// question 8
const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = `Welcome!
This ${title} is starting today.
Have a ${whatToHave}!`;

console.log(welcome);

// question 9

const car = {
  "paint-colour": "red",
  "number of wheels": 3,
};
console.log(car["paint-colour"]);
console.log(car["number of wheel"]);

// question 10
const product = {
  name: "Chicken Lips",
  price: 35,
  expired: false,
  getExpired: function () {
    console.log(this.expired);
  },
};

product.getExpired();
