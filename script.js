'use strict'

// 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;

//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   დაბეჭდეთ მასივისი ახალი ელემენტები.


// let item = [5, 25, 89, 120, 36];

// item.push('javascript', 'python')
// item.unshift('html', 'css')
// console.log(item.length);
// item.shift()
// item.pop()
// console.log(item);


// 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
//   მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;


// let array = ['ფორთოხალი', 'ბანანი', 'მსხალი']
// // console.log(array.length);
// array.unshift('ვაშლი','ანანასი')
// array.push('საზამთრო')
// // console.log(array.length);
// array.splice(2,0, 'მანგო')
// array.shift()
// array.pop()
// // console.log(array.length);
// console.log(array);


// 3. მოცემულია მასივი:
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, 
// რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;


// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map(function (y) {
//     return y / 3;
// })
// console.log(newArray);


// 4.  მოცემულია მასივი:

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let newArray = array.filter(function (y) {
//    if (typeof y == 'number') {
//         return y;
//    }
// })
// console.log(newArray);


// 5.მოცემულია მასივი:

// let languages = ['html', 'css', 'javascript', 'python, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები,
// რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;


// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newArray = languages.filter(function (y) {
//     return y.length > 3;
// })
// console.log(newArray);


// 6.მოცემულია მასივი:
// let array= ['academy', 'of', 'digital', 'industries']
// Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries);

// let array= ['academy', 'of', 'digital', 'industries'].reduce((accumlator, currentValue) => {
//     return accumlator.concat(' ' + currentValue);
//     })
    
// console.log(array);



// 7. მოცემულია მასივი:
// let item = [12, ‘google’, 32, null, ‘yahoo’, 25];

// შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით:
//  თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. 
//  თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით.
//   სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად;

// let item = [12, 'google', 32, null, 'yahoo', 25];

// let newArray = item.map(function (y){ 
//     if (typeof y == 'number') {
//         return Math.pow(y, 2)
//     }
//      else 
//     if (typeof y == 'string') {
//         return y.toUpperCase()
//     } else {
//         return y;
//     }
// })
// console.log(newArray);


// 8. 
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// Filter მეთოდის საშუალებით დააბრუნეთ მასივი,
//  რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;


// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newArray = words.filter(function (y) {
//     if (['M', 'm'].some(d => y.includes(d))) {
//        return y; 
//     }
// })
// console.log(newArray);


// 9. მოცემულია სამი მასივი:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// Concat მეთოდის საშუალებით გაერთიანეთ ეს სამი მასივი ერთ მასივში

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let newArray = arr1.concat(arr2, arr3)
// console.log(newArray);


// 10.მოცემულია მასივი:
// let arr = [1, 2, 3, 4, 5];
// Foreach საშუალებით გამოთვალეთ რიცხვების ჯამი


// let arr = [1, 2, 3, 4, 5];   

// let x = 0;
// arr.forEach (function(numSum){
//     x += numSum;
// })
//     console.log(x);


// 11.მოცემულია მასივი:
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// Filter მეთოდის საშუალებით ამოიღეთ მარტო დადებითი რიცხვები

// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let newNum = numbers.filter (y => y > 0)
// console.log(newNum);


// 12.შეამოწმეთ მოცელუმ მასივში 
// let arr = [-1, -2, -3, 4]; 
// არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთიდით


// let arr = [-1, -2, -3, 4].some(x => x >0); 
// console.log(arr);

// 13.მოცემულია მასივი let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];
// Reduce da filter მეთოდებით ამოიღეთ დადებითი რიცხვები;


// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]].reduce((x, y) => x.concat(y))
// let newArray = arr.filter(a => a > 0)
// console.log(newArray);




// 14. მოცემულია მასივი let array =[23,45,32,5,87,7,3,98]
// Sort მეთოდის საშუელებით დაალაგეთ ელემენტები კლებადონის მიხედვით და 
// ამოიღეთ მინიმალური რიცხვი;


// let array =[23,45,32,5,87,7,3,98];

// let newArray = array.sort ((x, y) => (y-x))[array.length - 1];
// console.log(newArray);
