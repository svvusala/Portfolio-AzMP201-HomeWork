let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

// ? Bütün elementləri konsola yazın.

// function allElements(students){

//     for(let i = 0; i<students.length; i++){
//         console.log(students[i]);
//     }
// }
// allElements(students)

// ? Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// function allElements(students) {
//   for (let i = 0; i < students.length; i++) {
//     console.log("ad :", students[i].name);
//   }
// }
// allElements(students);

// ? Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada

// function allElements(students) {
//   for (let i = 0; i < students.length; i++) {
//     console.log("ad :",students[i].name," soyad :",students[i].surname );
//   }
// }
// allElements(students);

// ? Kəsri olan tələbələrin ad və soyadını çapa verin

// function Fail(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].fail) {
//         console.log("ad :", students[i].name, " soyad :", students[i].surname);
//     }
//   }

// }
// Fail(students);

// ? Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// let maxHobbies = students[0].hobbies

// function Hobbies(students){
// for(let i =0; i<students.length; i++){
//   let element = students[i]
//   x = element
//   if(students[i].hobbies.length> maxHobbies.length){
//   }

// }
// console.log("Ad: ",x.name, "Hobbileri :", x.hobbies);

// }
// Hobbies(students)

// ? Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// let average = students[0].avgPoint;

// function avgPoint() {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].avgPoint > average) {
//       average = students[i];
//       console.log("ad: " + students[i].name + ",soyad: " + students[i].surname);
//     }
//   }
// }
// avgPoint();

// ? Parolu ən uzun olan tələbənin username və adını çapa verin

// let maxPassword = students[0].loginDetail.password

// function Password(students){
// for(let i =0; i<students.length; i++){
//   let element = students[i]
//   x = element
//   if(x.loginDetail.password.length> maxPassword.length){
//     maxPassword = x
//   }

// }
// console.log("Name: ",x.name, "Username :", x.loginDetail.username);

// }
// Password(students)

// ? boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// function haveBoyfriend(students) {
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].boyfriendGirlfriend) {
//         console.log("ad :", students[i].name, " username :", students[i].loginDetail.username);
//     }
//   }

// }
// haveBoyfriend(students);

// ? yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// function studentsAndTeachers(students){
//   for(let i = 0; i<students.length;i++){
//     let teacherBox = ""

//     if(students[i].age ==20){
//       // console.log("Ad: ", students[i].name);

//       for(let j=0; j<students[i].teacher.length;j++){
//         // console.log(students[i].teacher[j].name);

//         teacherBox+=students[i].teacher[j].name + " "
//       }

//       console.log("Telebe adi: ",students[i].name,",","Muellim adlari: ",teacherBox );
//     }
//   }
// }

// studentsAndTeachers(students)

// ? Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// let aznDollar = 0;

// function salary(students) {
//   for (i = 0; i < students.length; i++) {
//     if (students[i].salaryAZN) {
//       aznDollar = students[i].salaryAZN * 0.58;
//     }
//     console.log("Teqaudlerin dollarla ifadesi : ", aznDollar);
//   }
// }
// salary(students);

// ? Müəllimlərin baş hərflərini böyük hərflə yazın

// function Teachers(students) {
//   for (let i = 0; i < students.length; i++) {
//     let teacherBox = "";

//     for (let j = 0; j < students[i].teacher.length; j++) {
//       // console.log(students[i].teacher[j].name);

//       teacherBox +=
//         students[i].teacher[j].name.charAt(0).toUpperCase() +
//         students[i].teacher[j].name.slice(1) +
//         " ";
//     }
//     console.log("Müəllimlərin baş hərflərini böyük hərflə: ", teacherBox);
//   }
// }

// Teachers(students);

// ? Şifrəsində rəqəm olmayan tələbələri tapın

// ! -----------------------------------------

// ? Qızların arasında id-si 3 olan müəllimlərin adını deyin

// function studentsAndTeachers(students) {
//   for (let i = 0; i < students.length; i++) {
//     let teacherBox = "";

//     if (students[i].gender == "girl") {
//       // console.log("Ad: ", students[i].name);

//       for (let j = 0; j < students[i].teacher.length; j++) {
//         // console.log(students[i].teacher[j].name);
//         if (students[i].teacher[j].id == 3) {
//           teacherBox += students[i].teacher[j].name;
//           console.log(
//             "Telebe adi: ",
//             students[i].name,
//             ",",
//             "Muellim adlari: ",
//             teacherBox
//           );
//         }
//       }
//     }
//   }
// }

// studentsAndTeachers(students);

// ? Tələbələrin adlarını və müəllim saylarını çapa verin

// function studentsAndTeachers(students){
//   for(let i = 0; i<students.length;i++){
//     let teacherBox = 0

//       for(let j=0; j<students[i].teacher.length;j++){
//         // console.log(students[i].teacher[j].name);

//         teacherBox++
//       }

//       console.log("Telebe adi: ",students[i].name,",","Muellim saylari: ",teacherBox );
//     }
// }
// studentsAndTeachers(students)

// ? Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın

// let newarray = [];

// function mix(students){
//   for(i = 0; i<students.length; i++){
//     newarray.push({name:students[i].name, username: students[i].loginDetail.username, password: students[i].loginDetail.password});
//   }

//   return newarray

// }
// console.log(mix(students));

// ? 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

// function getFirstElements(array, n = 1) {
//   if (n < 0) return [];

//   return array.slice(0, n);
// }

// console.log(getFirstElements([7, 6, 5, -2]));
// console.log(getFirstElements([], 3));
// console.log(getFirstElements([7, 9, 5, -2], 3));
// console.log(getFirstElements([7, 9, 8, -2], 6));
// console.log(getFirstElements([7, 9, 3, -2], -3));

// ? 2. Write a simple JavaScript function to join all elements of the following array into a string.

// let arr = [3,5,6,8,12];

// const arrayMethod = (arr) => {
//   for (let i =0; i<arr.length; i++){
//   }
//   console.log(arr.join("*"));

// }
// arrayMethod(arr)

// ? 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.

// let sentence = "Dodge Challenger Srt Hellcat";

// let newSentence = ""

// function convert(sentence){
//   for(let i = 0;i<sentence.length;i++){
//     let char = sentence[i]
//     if(char == char.toUpperCase()){
//       newSentence+= char.toLowerCase()
//     }else {
//       newSentence+=char.toUpperCase()
//     }
//   }

//   return newSentence
// }
// console.log(convert(sentence));

// ? 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.

// let array = [0, 1, false, 2, undefined, '', 3, null]

// function clearArray(array) {
//   return array.filter(Boolean);
// }

// const mixedArray = [0, 1, false, 2, '', 3, 'a', 'e', 'i', 'o', 'u', null, undefined];
// const clearedArray = clearArray(mixedArray);

// console.log(clearedArray);

// ? 5. Write a method that returns a duplicate-free array.

// let arr = ['a', 2, 'd', 2, 'a', 14, 14, 's', false];

// let result = arr.reduce((acc,elem) => {
//   !acc.includes(elem) ? acc.push(elem):null
//   return acc
// },[])
// console.log(result);

// ? 6. Write a function that compares two arrays and returns true if they are identical.

// ! -----------------------------------------------------------------------------------

// ? 7.  Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// function checkOut(string, char) {
//   let sum = 0;
//   if (string.includes(char)) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == char) {
//         sum += i;
//       }
//     }
//     return sum;
//   } else {
//     return -1;
//   }
// }

// console.log(checkOut("hello", "l"));


