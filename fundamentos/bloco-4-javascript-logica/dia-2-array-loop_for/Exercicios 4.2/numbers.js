let numbers = [4, 8, 4, 18, 70, 8, 100, 2, 34, 26];

// // 1:

// for (let number of numbers) {
// 	console.log("Número: " + number);
// }

// 2:

// let value = 0;
// for (i = 0; i < numbers.length; i += 1) {
//     value += numbers[i]
//     if (i === numbers.length-1) {
//         console.log(value)
//     }
// }

// 3 :

//let value = 0;

// for (i = 0; i < numbers.length; i += 1) {
//     value += numbers[i]
//     if (i === numbers.length-1){
//         let median = value / (i + 1)
//         console.log("i: " + i)
//         console.log("value: " + value)
//         console.log("median: " + median)
//         console.log("numbers length: " + numbers.length)
//     }
// }

// 4 :

// let value = 0;

// for (i = 0; i < numbers.length; i += 1) {
// 	value += numbers[i];
// 	if (i === numbers.length - 1) {
// 		let median = value / (i + 1);
//         if (median > 20) {
//             console.log("Valor maior que 20")
//         } else {
//             console.log("Valor menor ou igual a 20")
//         }
// 	}
// }

// 5 :

// let comparison = 0
// for (i = 0; i < numbers.length - 1; i += 1) {
//     if (numbers[i] > comparison){
//         comparison = numbers[i]
//     }
// }
// console.log(comparison)

// 6 :

// let odd = 0;

// for (i = 0; i < numbers.length-1; i += 1) {
//     let isOdd = numbers[i] % 2
//     if (isOdd != 0){
//         odd += 1
//     }
// }
// if (odd > 0){
//     console.log(odd)
// } else {
//     console.log("no odd numbers")
// }

// 7 :

// let comparison = numbers[0];
// for (i = 0; i < numbers.length-1; i += 1){
//     if (comparison > numbers[i]){
//         comparison = numbers[i]
//     }
// }
// console.log(comparison)

// 8 :

// emptyArray = [];
// for (i = 0; i <= 25; i += 1) {
// 	emptyArray.push(i);
// }

// // 9 :

// for (i = 0; i < emptyArray.length; i += 1){
//     let divided = emptyArray[i] / 2
//     console.log(divided)
// }
