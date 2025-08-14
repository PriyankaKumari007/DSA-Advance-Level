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

// const arr=[-9,-19,-3];
// function findLargest(arr)
// {
//     let largest= -Infinity; // arr[0]
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>largest)
//         {
//             largest=arr[i];
//         }
//     }
//     return largest;
// }

// const largestNumber = findLargest(arr);
// console.log("Largest-Number",largestNumber);


//4. write a function to find second largest element in an array
//Brute Force Approach

function secondLargestElement(arr)
{
    if(arr.length <2) //should handle this corner case
    {
        return null;
    }
    let largest=-Infinity; //for negative array elements
    let secondLargest=-Infinity; //Dont assign 0 it will fail in -ve cases
    for(let i=0;i<arr.length;i++)
    {
    //     if(largest!=secondLargest &&  arr[i]>largest && arr[i]>secondLargest) //wrong approach
    //     {
    //         secondLargest = largest;
    //     }
    //    else  if(arr[i]>largest)
    //     {
    //         largest=arr[i];
    //     }

    if(arr[i]>largest)
    {
        secondLargest=largest;
        largest=arr[i];
    }
    else if(arr[i]>secondLargest && arr[i]<largest) //handle duplication of array element
    {
        secondLargest=arr[i];
    }
      
    }
      return secondLargest;
}
const arr=[-1,-45,-2,-29];
const result = secondLargestElement(arr);
console.log("secondLargestElement",result);



//Note (Handle corner cases)
//   - Array is empty
//   -Array has negative numbers
//   -Array has duplicates