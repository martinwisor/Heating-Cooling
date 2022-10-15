let actualTemp = 64;
let desiredTemp = 70;

if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else {
  console.log("Standby");
}

let targetUnit = prompt("What is the target unit?");
let tempCelsius = 15;

switch (targetUnit) {
  case "F":
    console.log(tempCelsius * 1.8 + 32);
    // alert(tempCelsius * 1.8 + 32);
    alert("Celsius " + tempCelsius + " Farenheit " + (tempCelsius * 1.8 + 32));
    break;
  case "K":
    console.log(tempCelsius + 273.15);
    alert(tempCelsius + 273.15);
    break;
  case "C":
    console.log(tempCelsius);
    alert(tempCelsius);
    break;
  default:
    console.log("Please choose a temperature unit.");
    alert("Please choose a temperature unit.");
}
