// Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let helloWorld = 'hello world'
// let lorem = 'lorem ipsum'
// let js = 'javascript is cool'
// console.log(helloWorld.length);
// console.log(lorem.length);
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//     let hello = 'hello World';
//     let lorem = 'lorem ipsum';
//     let j = 'javascript is cool';
// console.log(hello.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(j.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//     let hello = 'HELLO WORLD';
//     let lorem ='LOREM IPSUM';
//     let j ='JAVASCRIPT IS COOL';
// console.log(hello.toLowerCase());
// console.log(lorem.toLowerCase());
// console.log(j.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.replaceAll(' ', ''))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли, як ясла повні';
//  arr = str.split(` `)
// console.log(arr)

//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numsArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let stringsArray = numsArray.map(item => `${item}`);
// console.log(stringsArray);

// - Створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

function sortNums(array, direction) {
    nums.sort((num1, num2) => {
        if (direction === 'ascending') {
            return num1 - num2
        } else if (direction === 'descending') {
            return num2 - num1
        }
    })
    return array
}

let nums = [11, 21, 3];
let res = sortNums(nums, 'ascending');
console.log(res);
