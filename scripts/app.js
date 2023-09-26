function sayHello(name, lastName){
    console.log("hello " + name + " " + lastName);
}

function sum(num1,num2){
    // perform basic opperation here
    var res = num1 + num2;
    return res; 
}

function printNumbers(){
    //print numbers from 1 to 10
    // except the 3 and 7 because I don't like it.

    list = [121,1515,534,115,54,854,9752,3654,21,54,162,158];

    // 1. print every number separatley.
    // 2. print the sum of all the numbers ((( compinler +=)))
    // 3. print the numbers that are greater than 200.

    let sum = 0
        for (let i = 0; i < list.length; i++) {
            let num = list[i];
            if(num >= 200){
                console.log(num);
            }
            sum += num; // this is equal to sum = sum + num


        };

        console.log(sum, "this is the sum");
 




    for (let i = 0; i <= 10; i++) 
        if (i != 3 && i !=7){
            console.log(i)
        }
        // ! = Not
        // && = and (both MUST be true)
        // || = or
        
}



// DRY principle (DON"T REPEAT YOURSELF)
// SRP principle (Single Responsability Principle)
// KISS principle (Keep It Simple)

function init(){
    const name = "Samantha";
    console.log("hello world!");
    sayHello(name, "Roman");
    sayHello("John", "Doe");
    printNumbers();

    const result = sum(21,21);
    console.log(result);


}

window.onload = init;

// in the sayHello function pass your name
// and some other random name/


// execute our init funciton.
// this means he web page. first render 
// everything you need to render. HTML, CSS
// all the elements and when you finish now 
// render the js and only the elements I want to 
// render at the begining of the window. 

// if you call the function it means it will be 
// executed immediatly. We want to force the computer
// to wait. init() will force it immedieate. 