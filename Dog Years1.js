const myAge = 31; //Created a constant variable and set the value to my age
let earlyYears = 2; //Created a variable and assigned a value to it
earlyYears *= 10.5;
let laterYears = myAge - 2; //Created a variable that subtracts 2 years from myAge that has been already accounted for in earlyYears
laterYears *= 4; //To convert age into dog years multiply it by 4 using multiply operator
console.log(earlyYears , laterYears);
myAgeInDogYears = earlyYears + laterYears; //Calculating our age in dog years 
let myName = 'MANASA PUJITHA';
console.log(myName.toLowerCase()); //converting input letters to lower case by calling lowercase method
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`) //Using string interpolation to insert attributes into the sentence 
