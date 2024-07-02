// ? 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin

// let d = Number(prompt("Insert first number : "));
// let e = Number(prompt("Insert second number : "));
// let f = Number(prompt("Insert third number : "));

//     if((e+f)>d && (d+f)>e && (d+e)>f){
//         console.log("Ucbucagin tereflerdir.")
//     }else{
//         console.log("Ucbucagin terefleri deyil.")
//     }

// ? 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

// let a = Number(prompt("Insert first number : "));
// let b = Number(prompt("Insert second number : "));
// let y = Number(prompt("Insert third number : "));

// if(a==b==y){
//     console.log("Beraberterefli ucbucaqdir..")
// }else{
//     console.log("Beraberterefli ucbucaq deyil")
// }

// ? 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin

// let g = Number(prompt("Insert first number : "));
// let v = Number(prompt("Insert second number : "));

//     if(g>v){
//         console.log("En boyuk eded :", g)
//     }else if (v>g){
//         console.log("En boyuk eded :" , v)
//     }

// ? 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.

// let z = Number(prompt("Insert first number : "));
// let x = Number(prompt("Insert second number : "));
// let c = Number(prompt("Insert third number : "));

//     if(z>x && z>c){
//         console.log("En boyuk eded " + z + " dir")

//     }else if(x>z && x>c) {
//         console.log("En boyuk eded "  + x + " dir")

//     }else if(c>z && c>x){
//         console.log("En boyuk eded " + c + " dir")

//     }

// ? 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.

// let a = Number(prompt("Birinci ədədi daxil edin:"), 10);
// let b = Number(prompt("İkinci ədədi daxil edin:"), 10);
// let c = Number(prompt("Üçüncü ədədi daxil edin:"), 10);

// let temp;

// if (a > b) {
//     temp = a;
//     a = b;
//     b = temp;
// }

// if (a > c) {
//     temp = a;
//     a = c;
//     c = temp;
// }

// if (b > c) {
//     temp = b;
//     b = c;
//     c = temp;
// }
// alert("Artan sıra ilə ədədlər: " + a + ", " + b + ", " + c);

//-----------------------------------------------------------------------------------

// ? #6. Kinoteatra bilet satan proqram yazın. Şərtlər: Bilet qiyməti 10 AZN, yaş 18+ olmalıdır, yaş 18-dirsə minimum 3 bilet almalıdır.

// let biletQiymeti = Number(prompt("Bilet ucun odenisi edin :"));
// let yas = Number(prompt("Yasinizi qeyd edin : "));

//     if(biletQiymeti==10 && yas>18){
//         console.log("Ugurla kece bilersiniz.")
//     }
//     else if(biletQiymeti==10 && yas==18) {
//         console.log("Minimum 3 bilet alinmalidir.")
//     }
//     else{
//         console.log("Kecidiniz ugurlu olmadi ....")
//     }

// ? 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];

// for(let i = 0; i<arr.length; i++){

//     if(arr[i] % 2 == 1){
//         console.log(i)
//     }
// }

// ? 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];

// for(let i = 0; i<arr.length; i++){
//     if(i % 2 ==1){
//         console.log(arr[i])
//     }
// }

// ? 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let maxNum = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > maxNum){
//         maxNum = arr[i]
//     }
// }
// console.log("Max element:", maxNum);

// ? 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let cutMax = arr[0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 ==0 && arr[i] > cutMax){
//         cutMax = arr[i]
//     }
// }
// console.log("Max cut reqem:", cutMax)

// ? 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

// let arr=[3,8,2,5,4,10,7,6];
// let minElement = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<minElement){
//         minElement = arr[i]
//         console.log("Min elementin indeksi:",i);
//     }
// }

// ? 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

// let arr=[3,8,2,5,4,10,7,6];

// let minIndex = 0 ;
// let minValue = arr[0];
// let maxIndex = 0;
// let maxValue = arr[0];

// for (let i = 0; i<arr.length; i++){

//     if(arr[i] < minValue){
//         minValue = arr[i];
//         minIndex = i
//     }

//     if(arr[i] > maxValue){
//         maxValue = arr[i];
//         maxIndex = i
//     }
// }
// console.log("Min index: ", minIndex, "Max index : ", maxIndex);
// console.log( " Deyismis olan  deyerler : ", minValue, maxValue);
// console.log("Deyisdirilmemeis array : ", arr);
// let changedArray = arr[minIndex];
// arr[minIndex] = arr[maxIndex]
// arr[maxIndex] = changedArray
// console.log("Deyisdirilmis array : ", arr)

// ? 14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

// let cutminElement = arr[0];
// let cutminElementI = 0;
// let tekmaxElement = arr[1];
// let tekmaxElementI = 1;

// for (let i = 2; i < arr.length; i += 2) {
//   if (arr[i] % 2 == 0 && arr[i] < cutminElement) {
//     cutminElement = arr[i];
//     cutminElementI = i;
//   }
//   if (arr[i] % 2 == 1 && arr[i] < tekmaxElement) {
//     tekmaxElement = arr[i];
//     tekmaxElementI = i;
//   }
// }

// console.log(
//   "Cut min element : ",
//   cutminElement,
//   "Tek max element : ",
//   tekmaxElement
// );
// console.log("Deyisdirilmemis array : ", arr);

// let changedArray = arr[cutminElementI];
// arr[cutminElementI] = arr[tekmaxElementI];
// arr[tekmaxElementI] = changedArray;
// console.log("Deyisdirilmis array : ", arr);

// ? 15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

// let a = 13;

// if(arr.includes(a)){
//     console.log("Daxil olunan eded array de movcuddur")
// }else{
//     console.log("Movcud deyil")
// }

// ? 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

// let minElement = arr[0];
// let maxElement = arr[0];
// let sum = 0

// for(let i = 0; i<arr.length; i++){

//     if(arr[i] < minElement){
//         minElement = arr[i];
//     }
//     if(arr[i] > maxElement){
//         maxElement = arr[i];
//     }
// }

// for(let i = 0; i<arr.length; i++){

//     if(arr[i] !== minElement && arr[i] != maxElement){
//         sum += arr[i]
//     }
// }

// console.log("Min element: ",minElement);
// console.log("Max element: ",maxElement);
// console.log("Min ve max elementleri nezere almadan olan cem :", sum);

// ? 17. Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'boolean') {
//         if (i > 0) {
//             console.log("Soldakı element:", arr[i - 1]);
//         }
//         if (i > 0) {
//             console.log("Sağdakı element:", arr[i + 1]);
//         }
//     }
// }

// ? 18. Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let enUzunSoz = "";

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     if (arr[i].length > enUzunSoz.length) {
//       enUzunSoz = arr[i];
//       console.log("En uzun soz : ", enUzunSoz);
//     }
//   }
// }

// ? 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// let herfleriBoyuk = "";
// let herfleriBoyukI = 0;

// for(let i = 0; i<arr.length; i++){
//     if(typeof arr[i] == "string"){
//         if(arr[i] == arr[i].toUpperCase()){
//             herfleriBoyuk = arr[i]
//             herfleriBoyukI = i
//         }
//     }

// }

// console.log("Butun herfleri boyuk olan soz :", herfleriBoyuk, "ve indeksi :",herfleriBoyukI)

// ? 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın

// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];


// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "string") {
//     let uppercaseCount = 0;
//     for (let j = 0; j < arr[i].length; j++) {
//       let char = arr[i][j];

//       if (char >= "A" && char <= "Z") {
//         uppercaseCount++;
//       }
//     }
//     if (uppercaseCount > 2) {
//       console.log("2-dən artıq böyük hərf olan söz:", arr[i]);
//     }
//   }
// }
