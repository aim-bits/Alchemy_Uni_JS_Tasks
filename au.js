// function summation(n) {
//     let str = "";

//     for (i = 1; i <= n; i++) {
//         str = str + "a"
//     }

//     return str;
// }


// console.log(summation(5))


// let i = 0
// while (i<3) {
//    console.log(i) 
//    i++
// }


// function scream(n) {
//     let str = "";

//     for (i = 1; i <= n; i++) {
//         (i%2) ? str +="a": str +="A"
//     }

//     return str;
// }

// console.log(scream(5));



// function topDouble(value, top) {
//     while(value <= (top/2)){
//         console.log(value);
//         value = value * 2
//         // if(value >= top) break
//     }
//     return value
// }
// console.log(topDouble(1, 100));


// function isEven(num) {
//     if (num % 2 == 0 ){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(3));

// function maxSum(num) {
//     let sum = 0
//     for (i = 0; i <= num; i++){
//         sum = sum + i
//         console.log(sum);
//     }
//     return sum;
// }

// console.log(maxSum(5));

// function splitAtX(string) {
//     const index = string.indexOf('x');
//     const a = string.slice(0,index);
//     const b = string.slice(index+1);
//     return (a.length > b.length) ? a : b;
// }

// splitAtX('Happyxdays')

// function sumEven(array) {
//     let sum = 0
//     for (i =0; i < array.length; i++){
//         if(array[i] % 2 == 0){
//             sum = sum + array[i]
//             console.log(sum)
//         }
//     }
//     return sum 
// }
// console.log( sumEven([1, 2, 4, 6, 1]) )


// function addOne(array) {
//     let newArray =[]
//     for(i = 0; i < array.length; i++){
//         newArray.push(array[i] + 1)
//     }
//     return newArray
// }

// function addOne(array) {
//     for(let i = 0; i < array.length; i++) {
//         array[i]++;
//     }
// }
// const array = [1,3,7,8,9,2,3]
// console.log(addOne(array))

// function numberOfPizzas(orders) {
//     let pizza = 0;

//     for (order of orders){ // for(i = 0;i< ordders.length; i++){ pizza += orders[i].pizza}
//         pizza = pizza + order.pizzas
//     }
//     return pizza
// }
// const orders = [
//     { pizzas: 3 },
//     { pizzas: 5 },
//     { pizzas: 10 }
// ];
// console.log(numberOfPizzas(orders))

// const object = { a: 1, b: 2, c: 3 } 
// for(let key in object) {
//     console.log(key);
// }

// function halfValue(numbers) {
//     newArray=[]
//     for (num of numbers){
//         half = num/2
//         if (num % 2 == 0){
//             newArray.push(half)
//         }else{
//             newArray.push(Math.round(half))
//         }

//     }
//     return newArray
// }
// console.log(halfValue([3,6,7,10]));


// function countC(str) {
//     newArray =[]
//     for ( letter of str){
//         if (letter.toLowerCase() === 'c'){
//             newArray.push(letter.toLowerCase())
//         }
//     }
//     return newArray.length
// }

// console.log(countC('cupcake Can'));


// function reverse(string) {
//     let newString = ""
//     for(i=string.length -1 ; i>=0; i--){
//         newString += string[i] 
//     }
//     return newString
// }
// console.log(reverse('cat'));


// function isPalindrome(string) {
//     let newStr =""
//     for(i= string.length - 1; i >= 0; i--){
//         newStr +=string[i]
//     }
//     return (newStr === string)? true:false
// }

// function sumTogether(arr1, arr2) {
//     let newArr = [];

//     for(let i = 0; i < arr1.length; i++) {
//         console.log(arr1[i]);
//         console.log(arr2[i]);
//         const sum = arr1[i] + arr2[i];
//         newArr.push(sum);
//     }

//     return newArr;
// }

// console.log(sumTogether([1,2,3],[3,4,5]));


// function countElements(elements) {
//     let eleCount = {}
//    for(ele of elements){
//         if(!eleCount[ele]){
//            eleCount[ele] = 1
//         }else{
//             eleCount[ele] += 1
//         }
//    }
//    return eleCount
// }
// console.log(countElements(['e','f','d','d','e','g']));


function playerHandScore(hand) {
    scores ={
        K : 4,
        Q : 3,
        J : 2
    }
    handArr = hand.split("")
    let sum =0
    for(i=0; i<handArr.length; i++){
        score = scores[handArr[i]]
        sum += score
    }
    return sum
}












