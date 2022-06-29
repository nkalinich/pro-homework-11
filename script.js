// Написать функцию, которая принимает как аргумент(параметр) два массива и 
// сравнивает суммы всех ЧИСЛОВЫХ элементов. 
// Тот массив, сумма которого большая – должен вернутся функцией.

// a = [1,2,3, 'hello',4,5] => summA = 15
// b = [1,2,3, true, 4, undefined, 6] => summB = 16
// if(summA < summB) => return b


const firstArr = [1,2,3, 'hello',4,5];
const secondtArr = [1,2,3, true, 4, undefined, 6];

function sumArray(arr1, arr2) {
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        if(typeof arr1[i] === "number") sum += arr1[i];
    }

    let sum1 = 0;
    for(let i = 0; i < arr2.length; i++) {
        if(typeof arr2[i] === "number") sum1 += arr2[i];
    }

    if(sum < sum1) return arr2;
    return arr1;
}

console.log(sumArray(firstArr, secondtArr));