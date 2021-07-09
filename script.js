// Deel A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. 
// Gebruik de .push method.
// const addTheWordCool = function(array){
// 	array.push("cool");
// 	return array;
// }
// console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]


// Deel B Schrijf een JavaScript functie die het aantal elementen in een array retourneert
// const amountOfElementsInArray = (item) => item.length;

// console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
// resultaat: 3


// Deel C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. 
// PS: Bij welk cijfer begint een array ook alweer met tellen? = 0
// const selectBelgiumFromBenelux = (item) => item[0];

// console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 


// Deel D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.
// const lastElementInArray = (item) => item[item.length - 1];

// console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"


// Deel E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren.
// Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.
// const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
// const impeachTrumpSlice = function(array) {
// 	return array.slice(1); // maakt een kopie van de bestaande array en maakt een nieuwe array aan met nieuwe waarden. 
// }

// const impeachTrumpSplice = function(array) {
// 	return array.splice(0, 1); // past de originele array aan. 
// }

// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
// console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


// Deel F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). 
// ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.
// const stringsTogether = (items) => items.join(" ");

// console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"


// Deel G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']
// const combineArrays = (arr1, arr2) => arr1.concat(arr2);

console.log(combineArrays([1,2,3], [4,5,6])); 
// resultaat: [1,2,3,4,5,6]