// let num = "";;
// console.log(typeof(num));

function showArr(arr)
{
    for(let elem of arr)
    {
        console.log(elem);
    }
}


function MoreLess(a,b)
{
    return a<b;
}

// let arr = new Array(6.5,100,200,300,400,500);
// // arr[0] = 10;
// // arr[1] = 20;
// // arr[33] = 30;
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[33]);
// console.log(arr[2]);

let array1 = [1,23,-5,-7,100,12,44,55,22,223,221,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000];

showArr(array1);

// console.log("Array at the start : " + array1);
// array1[0] = 100;
// console.log("Array after changing some value : " + array1);
// console.log("Array length : " + array1.length);
// // for (let i = 0; i < array1.length; i++) 
// //     {
// //         console.log(`Elem : ${i} = value : ${array1[i]}`);
// //     }

// // array1.forEach((elem, ind)=>{
// //     console.log(`Elem : ${ind} = value : ${elem}`);
// // })

// // array1.push(777);
// // array1.pop();
// array1.unshift(666);
// console.log("Index of 223 : " + array1.indexOf(232323));
// console.log("Index of 221 : " + array1.lastIndexOf(232323));

// // for(let elem of array1)
// // {
// //     console.log(elem);
// // }


// array1.sort();
// console.log("Array after sorting : " + array1);
// array1.splice(0, 2);
// console.log("Array after removing first two elements : " + array1);


// array1[66] = 7777;
// for(let elem of array1)
// {
//     console.log(elem);
// }


// let filteredArray = array1.filter((el)=>el%2!=0);
// console.log("Filtered array : ");
// for(let elem of filteredArray)
// {
//     console.log(elem);
// }

// let str = filteredArray.join(" * ")
// console.log(str);

// let splittedArray = str.split(" * ");
// for(let elem of splittedArray)
// {
//     console.log(elem);
// }