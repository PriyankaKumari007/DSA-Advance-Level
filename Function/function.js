function greet(name) { // 'name' is the parameter
    console.log("Namaste " + name);
}

greet("Priyanka"); // "Priyanka" is the argument


function sum(a,b){
    return a+b;
}

const result = sum(2,4);
console.log("Sum is: " + result); // Output: Sum is: 6


//Create a function which except the age whether a person is eligible to vote or not

function isEligible(age){
    if(age<1)
    {
        console.log("Invalid age");
    }
    else if(age>=18){
        console.log("Eligible to vote");
    }else{
        console.log("Not eligible to vote");
    }
}

isEligible(20); // Output: Eligible to vote
isEligible(16); // Output: Not eligible to vote
isEligible(0); // Output: Invalid age
