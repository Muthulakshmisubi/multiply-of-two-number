// Function for multiplication 

function multiply(a, b) { 

    let result = 0; 

    for (let i = 1; i <= b; i++) { 

        result += a; 

    } 

    return result; 
} 

  
// Calling function and storing the returned value 

let result = multiply(5, 10); // 50 

  
// Display the result 
console.log(result);