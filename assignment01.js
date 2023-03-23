// I've created a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.

function multiplicationTable(num){

var i;
// Inside the function, I've created a for loop that iterates from 1 to 10.
for(i=1;i<=10;i++)
{
    var product;
// Inside the loop, i multiplied the current iteration number by the input "num" to generate the product.
    product= num * i;

// here i logged the product to the console in the format "num x iteration = product".
    console.log(`${num} + ${i} = ${product}`);
}
    console.log('\n');

}

// Here i tested the function with different input numbers to generate the multiplication table.
multiplicationTable(3);

multiplicationTable(9);

multiplicationTable(21);
