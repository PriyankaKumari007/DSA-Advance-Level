// 1. **** print this pattern
//    ****
//    ****
//    ****

// function starPattern(n)
// {
    
//     for(let i=0;i<n;i++)
//     {
//         let row ="";
//         for(let j=0;j<n;j++)
//         {
//           row= row+ "*";
//         }
//         console.log(row);
//     }
// }

// const result = starPattern(4);

// 2. *
//    *  *
//    *  *  *
//    *  *  *  *

// function rightPattern(n)
// {
//     for(let i=0;i<n;i++)

//         {
//             let row="";
//             for(let j=0;j<=i;j++)
//             {
//                 row =row+"*";
//             }
//             console.log(row)
//         }
// }

// rightPattern(4)

// 3.    1
//       1  2
//       1  2  3
//       1  2  3  4


// function ladder(n)
// {
//     for(let i=1;i<=n;i++)
//     {
//         let row ="";
//         for(let j=1;j<=i;j++)
//         {
//           row =row+ j;
//         }
//       console.log(row)
//     }
// }

// ladder(4)


//4     12345
    //  1234
    //  123
    //  12
    //  1


    // function ultaPyramid(n)
    // {
    //     for(let i=n;i>=1;i--)
    //     {
    //         let row="";
    //         for(let j=1;j<=i;j++)
    //         {
    //             row=row+j;
    //         }
    //         console.log(row);
    //     }
    // }


    // ultaPyramid(5);
//                           i  stars   empties
//4     - - - - *            0   1(i+1)  n-(i+1)
    //  - - - * *            1   2(i+1)  
    //  - - * * *
    //  - * * * *
    //  * * * * *



    // function starPrint(n)
    // {
    //     for(let i=0;i<n;i++)
    //     {
    //         let row = "";
    //         for(let j=0;j< n-(i+1);j++)
    //         {
    //             row=row+ "-";
    //         }
    //         for(let k=0;k<i+1;k++)
    //         {
    //             row=row+"*";
    //         }
    //         console.log(row)
    //     }
    // }

    // starPrint(5)


//Count Digit

function countDigit(n)
{
    if(n==0)   //handle corner cases as well
        return 1; 

    n= Math.abs(n);  //Converting negative numbers to positive


    let count=0;
    while(n>0)
    {
        n= Math.floor(n/10);
        count++;
    }
    return count;

}

const res= countDigit(-652);
console.log(res);


//NOTE:
//  -Math.floor(10.9) -> 10

//  -Math.round(10.5)  ->11 if (.<=5) it will increase the value by adding 1.

//  -Math.abs(-9) --> 9 //Converting negative numbers to positive