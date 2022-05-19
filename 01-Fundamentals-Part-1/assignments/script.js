const country = "Brazil";
const continent = "South America";
let population = 210; // in millions
const isIsland = false;
const language = "Portuguese";

console.log("Continent: " + continent + "; Country: " + country + "; Population: " + population + " million(s)")

console.log(typeof (country));
console.log(typeof (continent));
console.log(typeof (population));
console.log(typeof (isIsland));
console.log(typeof (language));

let question = "1. If your country split in half, and each half would contain half the population,then how many people would live in each half?";
let answer = population / 2 + " millions";
console.log("Q" + question + " Answer: " + answer);

question = "2. Increase the population of your country by 1 and log the result to the console";
answer = population + 1 + " millions";
console.log("Q" + question + " Answer: " + answer);

question = "3. Finland has a population of 6 million. Does your country have more people than Finland?";
answer = population > 6;
console.log("Q" + question + " Answer: " + answer);

question = "4. The average population of a country is 33 million people. Does your country have less people than the average country?";
answer = population < 33;
console.log("Q" + question + " Answer: " + answer);

question = "5. Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'";
let description = "";
answer = description.concat(country, " is in ", continent, ", and its ", population, " million people speak ", language);;
console.log("Q" + question + " Answer: " + answer);
