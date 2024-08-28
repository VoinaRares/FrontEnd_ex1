import { getOlympicData } from "./olympicData.js";

// EX 1
console.log(participatingCountries());

function participatingCountries() {
  const arr = getOlympicData();
  return arr.map(item => item.Nation);
}

//EX 2

function sortedPopulationCountries(){
    const arr = getOlympicData();
    return arr.sort( (a, b) => b.Population - a.Population);
}

function top5(arr){
    return arr.slice(0, 5)
}

console.log(top5(sortedPopulationCountries()));


//EX 3

function countryExistsStartingLetter(startingLetter){
    const arr = getOlympicData();
    return arr.filter(item => (startingLetter === Array.from(item.Nation)[0]) && item.Exists === 'YES');
}

console.log(countryExistsStartingLetter('A'));


//EX 4

function sumPopulation(){
    const arr = getOlympicData().map(item => item.Population);
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sumPopulation());

//EX 5 

function sortedFirstAppearence(){
    const arr = getOlympicData();
    return arr.sort((a, b) => a.First_App - b.First_App);
}

console.log(top5(sortedFirstAppearence()));

//EX 6

function newCountryObjects(){
    const arr = getOlympicData();
    return arr.map(item => {return {
         Nation: item.Nation,
          Code: item.Code
        }});
}

console.log(newCountryObjects());

//Ex 7

function mostAppearences(){
    const arr = getOlympicData();
    return arr.map(item => item).sort((a, b) => b.Apps - a.Apps)[0];
}

console.log(mostAppearences());


//Ex 8

function mostSuccesfulSport(sport){
    const arr = getOlympicData();
    return arr.filter(item => item.MostSuccessfulSport === sport);
}

console.log(mostSuccesfulSport('Athletics'));

//Ex 8

function smallestCountryWin(){
    const arr = getOlympicData();
    return arr.filter(item => item.Medal > 0).sort((a,b) => a.Population - b.Population)[0];
}

console.log(smallestCountryWin());


//Ex 9

function ObjectAllCountries(){
    const arr = getOlympicData();
    const newObj = {};
    arr.forEach(element => {
        newObj[element.Nation] = element.Population;
    });

    return newObj;
}

console.log(ObjectAllCountries());

//Ex 10

function ObjectAllCountriesAlphabetic(){
    const arr = getOlympicData();
    const newObj = {};
    arr.forEach(country =>{
        if(!newObj[Array.from(country.Nation)[0]]){
            newObj[Array.from(country.Nation)[0]] = [];
        }

        newObj[Array.from(country.Nation)[0]].push(country);
        
    });

    return newObj;
}

console.log(ObjectAllCountriesAlphabetic());


//Ex 11

function RandomCountryNameAndPopulation(){
    const arr = getOlympicData();
    const rd = Math.floor(Math.random() *  (arr.length - 0) + 0)
    const randomObject = arr[rd];
    return {Nation: randomObject.Nation,
        Population: randomObject.Population
    };
}

console.log(RandomCountryNameAndPopulation());


//EX 12

function countriesOverPopulation(minimum){
    const arr = getOlympicData();
    return arr.filter(item => item.Population > minimum);
}

function MoreWinterMedals(arr){
    return arr.filter(item => item.WO_Medal > item.SO_Medal);
}

console.log(MoreWinterMedals(countriesOverPopulation(1000000)));


//Ex 13

function getAverageMedalsWon(){
    const arr = getOlympicData().map(item => item.Medal);
    return arr.reduce((a, b) => a +b) / arr.length;
}

function getCountriesUnderMaximum(maximum){
    const arr = getCountriesWithMedalsAbove(getAverageMedalsWon());
    return arr.filter(item => item.Population < maximum);
}

function getCountriesWithMedalsAbove(min){
    const arr = getOlympicData();
    return arr.filter(item => item.Medal > min);
}

console.log(getCountriesWithMedalsAbove(getAverageMedalsWon()));
console.log(getAverageMedalsWon());
console.log(getCountriesUnderMaximum(5000000));


//Ex 14

function mostRecentFirstAppearence(){
    const arr = getOlympicData();
    return arr.sort((a, b) => b.First_App - a.First_App)[0];
}

console.log(mostRecentFirstAppearence());


//Ex 15

function oldestFirstAppearenceStillExists(){
    const arr = getOlympicData().filter(item => item.Exists === 'YES');
    return arr.sort((a, b) => a.First_App - b.First_App)[0];
}

console.log(oldestFirstAppearenceStillExists());



