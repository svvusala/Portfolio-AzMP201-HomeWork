// ? 21. 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

// function sum(a,b){
//     console.log(a+b);
//     return a+b
// }
// sum(4,5)

// function minus(a,b){
//     console.log(a-b);
//     return a-b
// }
// minus(11,5)

// function multiply(a,b){
//     console.log(a*b);
//     return a*b
// }
// multiply(5,5)

// function mix(a,b){
//     console.log((a*b)-(a+b));
//     return multiply(a,b)- sum(a,b)
// }
// console.log(mix(4,5))

// ? 22. Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

// function elements(a,b,operator){
//     if(operator == "+"){
//         return a+b
//     }
//     else if(operator == "-"){
//         return a-b
//     }
//     else if(operator == "*"){
//         return a*b
//     }
//     else if(operator == "/")
//         return a/b
// }

// console.log(elements(3,5,"/"))

// ? 23. Sadəcə ölkə adlarının olduğu array-ı return edən funksiya yazın

// let countries = ["Spain", "Italy", "Switzerland"];

// function writeCountries(countries){
//     return countries
// }

// console.log(writeCountries(countries));

// const writeCountries = (somecountries) => {
//     return countries
// }

// console.log(writeCountries(countries));

// ? 24. Hərfə görə ölkə sayının olduğu object return edən funksiya yazın

// ---------------------------------------------------------------------

// ? 25. Ən çox şəhəri olan ölkə adını return edən funksiya yazın

// let countriesProperties = {
//     "Azerbaijan": ["Baku", "Sheki", "Sumqayit"],
//     "United States of America": ["New York", "Los Angeles", "Chicago", "Houston"],
//     "Germany": ["Berlin", "Hamburg", "Munich"]
// };

// function findCountrieswithMostCities(countriesProperties){
//     let maxCityCount = 0;
//     let countryWithMostCities = "";

//     for (let countryName in countriesProperties) {
//         let cityCount = countriesProperties[countryName].length;
//         if (cityCount > maxCityCount) {
//             maxCityCount = cityCount;
//             countryWithMostCities = countryName;
//         }
//     }

//     return countryWithMostCities;
// }

// console.log("en cox seheri olan olke: ",findCountrieswithMostCities(countriesProperties))

// ? 26. Ölkə adı ən uzun olan ölkənin şəhərlərini return edən funksiya

// let countriesProperties = {
//     "Azerbaijan": ["Baku", "Sheki", "Sumqayit"],
//     "United States of America": ["New York", "Los Angeles", "Chicago", "Houston"],
//     "Germany": ["Berlin", "Hamburg", "Munich"]
// };

// function findCountryWithLongestName(countriesProperties) {
//     let longestName = "";
//     for (let country in countriesProperties) {
//         if (country.length > longestName.length) {
//             longestName = country;
//         }
//     }
//     return longestName;
// }

// function getCitiesOfCountryWithLongestName(countriesProperties, longestCountryName) {
//     return countriesProperties[longestCountryName];
// }

// let longestCountryName = findCountryWithLongestName(countriesProperties);
// console.log("Olke adi en uzun olan olke : ", longestCountryName)
// let citiesOfLongestCountry = getCitiesOfCountryWithLongestName(countriesProperties, longestCountryName);
// console.log("Ən uzun ölkənin şəhərləri:", citiesOfLongestCountry);

// ? 27.  Bütün ölkələrin şəhər saylarının olduğu objecti return edən funksiya yazın .Nümunə {"Azerbaijan":70,"Turkey":300}

// let countries = {
//     "Azerbaijan": ["Baku", "Ganja", "Sumqayit"],
//     "United States of America": ["New York", "Los Angeles", "Chicago", "Houston"],
//     "Germany": ["Berlin", "Hamburg", "Munich"]
// };

// function getCitiesCount(countries) {
//     let citiesCount = {};

//     for (let country in countries) {
//         citiesCount[country] = countries[country].length;
//     }

//     return citiesCount;
// }

// console.log(getCitiesCount(countries))

// ? 28. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

// arr = [2,4,6,8,11];
// let newarr = [];

// function arrElements(arr){
//     for(let i =0; i<arr.length; i++){
//         newarr.push(arr[i]**2)
//     }

//     return newarr
// }
// console.log("Her bi elementi kvadrata yukselmis yeni array : ",arrElements(arr))

// ? 29. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

// function arrProperties(arr) {
//   let sum = 0;
//   let allNegative = true;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//       allNegative = false;
//     }
//   }
//   if (allNegative) {
//     return 0;
//   } else {
//     return sum;
//   }
// }

// console.log(arrProperties([1, 2, 4, -5, 7]));
// console.log(arrProperties([-2, -4, -5, -7]));

// ? 30. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik     element ilə ən böyük elementin ədədi ortasıdır.

// let array = [3, 6, 12, 8, 10];
// let maxElement = array[0];
// let minElement = array[0];
// let median = 0;
// let edediOrta = 0;
// let obj = {};

// function medianEdediorta(array) {
//   for (let i = 0; i < array.length; i++) {
//     edediOrta += array[i];
//     if (array[i] > maxElement) {
//       maxElement = array[i];
//     }
//     if (array[i] < minElement) {
//       minElement = array[i];
//     }
//   }

//   median = (maxElement + minElement) / 2;
//   obj.Median = median;
//   obj.EdediOrta = edediOrta / array.length;

//   return obj;
// }
// console.log(medianEdediorta(array));

// ? 31. Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın. "My name is Gurban" - "MniG"

// let sentence = "My name is Vusala";
// let result = "";

// function combine(sentence) {
//   let word = sentence.split(" ");

//   for (let i = 0; i < word.length; i++) {
//     result += word[i][0];
//   }
//   return result;
// }
// console.log(combine(sentence));

// ? 32. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript- j8t

// function shortenSentence(sentence) {
//   let words = sentence.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     if (word.length > 4) {
//       words[i] = word[0] + (word.length - 2) + word[word.length - 1];
//     }
//   }

//   return words.join("");
// }

// console.log(shortenSentence("salimova"));

// ? 33. İçərisində name və age key-ləri olan obyektlərdən təşkil olunmuş bir array var. Ən az yaşı olan ilə ən çox yaşı olan elementin yaşlarını və onların fərqini array şəklində qaytaran funksiya yazın.

// let firstarray = [
//     {"name":"Vusala",age:19},
//     {"name":"Habiba",age:18},
//     {"name":"Elvin",age:23},
// ]

// let maxNum = firstarray[0].age
// let minNum = firstarray[0].age

// function arrayProperties(firstarray){
//     for(let i=0; i<firstarray.length;i++){
//         if(firstarray[i].age>maxNum){
//             maxNum = firstarray[i].age
//         }if(firstarray[i].age < minNum){
//             minNum = firstarray[i].age
//         }
//     }

//     return[minNum,maxNum,maxNum-minNum]
// }
// console.log(arrayProperties(firstarray));

// ? 34. N faktorialı hesaplayan funksiya yazın.

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(5));
