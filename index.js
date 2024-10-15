let isValid = false;
let flavorsArray = [];

while (!isValid) {
  let userInput = prompt(`Please enter your froyo flavors of choice, separated by commas.`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

  if (userInput === null || userInput.trim() === ""){
    alert(`Please enter your froyo flavors of choice, separated by commas.`);
    continue;
  }

  flavorsArray = userInput.split(`,`).map(flavor => flavor.trim().toLowerCase());

  if (flavorsArray.length > 0) {
    isValid = true;
  }
}

let flavorCount = {};

for (let flavor of flavorsArray){
  flavorCount[flavor] = (flavorCount[flavor] || 0) +1;
}

console.log(flavorCount);