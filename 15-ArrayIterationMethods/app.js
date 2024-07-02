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

// ? Bütün elementləri konsola yazın

// const allElements = students.filter((item) => {
//     console.log(item)
// })

// ? Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// const allElements = students.filter((item) => {
//     console.log("ad:",item.name)
// })

// ? Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada

// const allElements = students.filter((item) => {
//     console.log("ad:",item.name, "soyad:",item.surname)
// })

// ? Kəsri olan tələbələrin ad və soyadını çapa verin

// const Fail = students
// .filter((item) => item.fail)
// .forEach((item) => console.log("ad: ",item.name,"soyad: ",item.surname))

// ? Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// const enCoxHobbiOlanTelebe = students.reduce((telebe1, telebe2) => {
//     if (telebe1.hobbies.length > telebe2.hobbies.length) {
//         return telebe1;
//     } else {
//         return telebe2;
//     }
// });

// console.log("Ad:", enCoxHobbiOlanTelebe.name);
// console.log("Hobbileri:", enCoxHobbiOlanTelebe.hobbies.join(" , "));

// ? Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// const ortalamaEnBoyuk = students.reduce((telebe1,telebe2) => {
//     return telebe1.avgPoint > telebe2.avgPoint ?  telebe1:telebe2
// })
// console.log("Ad:", ortalamaEnBoyuk.name,", Soyad : ", ortalamaEnBoyuk.surname)

//? Parolu ən uzun olan tələbənin username və adını çapa verin

// const parolEnUzun = students.reduce((telebe1,telebe2) => {
//     return telebe1.loginDetail.password.length > telebe2.loginDetail.password.length ?  telebe1:telebe2
// })
// console.log("Ad:", parolEnUzun.name,", Soyad : ", parolEnUzun.surname)

// ? boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// const Fail = students.filter((telebe) => telebe.boyfriendGirlfriend)
// .forEach((telebe) => {
//     console.log("Ad:", telebe.name,", Username:", telebe.surname);
// });

// ? yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// const ageAndTeacher = students.filter((age) => age.age == 20)
// .forEach((student) => {
//     console.log("Ad : ", student.name)
//     student.teacher.forEach((muellim) => console.log("Muellim adlari: ", muellim.name))
// })

// ? Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// const salary = students.forEach((teqaud) => {
//     dollarteqaud = teqaud.salaryAZN*0.6
//     console.log("Ad: ",teqaud.name, ",Teqaud dollarla: ", dollarteqaud)
// })

// ? Müəllimlərin baş hərflərini böyük hərflə yazın

// students.forEach((telebe) => {
//   telebe.teacher.forEach((muellim) => {
//     muellim.name = muellim.name.charAt(0).toUpperCase() + muellim.name.slice(1)
//     console.log("Muellimlerin bas herfi boyukle : ", muellim.name)
//   })
// })

// ? Şifrəsində rəqəm olmayan tələbələri tapın

// const studentsPassword = students.filter((telebe) => {
//   students.some((sifre) => {
//     sifre.loginDetail.password != isNaN;
//     students.forEach((telebeler) => console.log("ad : ", telebeler.name));
//   });
// });

// ? Qızların arasında id-si 3 olan müəllimlərin adını deyin

// const telebeQizlar = students.filter((telebeler => telebeler.gender = "girl") => )  {
//   console.log(telebeler)
// }) 


  
