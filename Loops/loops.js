// const arr=[1,2,3,4,5];

// function searchElement(arr, target){
//     for(let i=0;i<arr.length;i++)
//         {
//             if(arr[i]== target)
//             {
//                 return i;
               
//             }
//         }
//         return -1;
// }

// const resIndex = searchElement(arr,9);
// console.log("resIndex",resIndex);



//2. Write a function that returns the number of negative numbers in an array
// const arr= [2,-9,17,0,1,-10,-4,8];
// function countNegative(arr)
// {
//     let count=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]<0)
//         {
//             count++;
//         }
//     }
//     return count;
// }

// const totalCount = countNegative(arr);
// console.log("Count-Negative-Number",totalCount);


//3.Write a function that returns the largest number in an array

const arr=[-9,-19,-3];
function findLargest(arr)
{
    let largest= -Infinity; // arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            largest=arr[i];
        }
    }
    return largest;
}

const largestNumber = findLargest(arr);
console.log("Largest-Number",largestNumber);