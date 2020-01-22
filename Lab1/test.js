var mathLibrary = require('./myMath');

function sayHello(){
    console.log("Hey, this is Josh");
}


function ex1(){
    // print numbers from 1-10, except 7
    for(var i = 1; i < 11; i++){
        if(i != 7){
        console.log(i);
        }
    }
    
    
}

function ex2(){
    // print number from 20 to 1, except 7 and 13
    for(var j = 20; j > 0; j--){
        if(j != 7 && j !=13){
            console.log(j);
        }
    }
}
console.log("Hello World");

// sayHello();
// ex1();
// ex2();

function homeWork(){
    var numbers = [23,45,23,56,2,-34,8,1,-12,2,123,9045,546,34,-123];

    // 1 find the smallest
    var smallest = numbers[0];
        for(var i=1; i<numbers.length; i++){
            if(numbers[i] < smallest){
                smallest = numbers[i];
            }
        }
    console.log("This number is the smallest:", smallest);
    
    // 2 the biggest
    var biggest = numbers[0];
        for(var i=1; i<numbers.length; i++){
            if(numbers[i] > biggest){
                biggest = numbers[i]
            }
        }
    console.log("This number is the biggest:", biggest);
    
    // 3 the sum of them all
    var sums = 0;
    for(var i=0; i<numbers.length; i++){
        sums += numbers[i];
    }
    console.log("The sum of all numbers in this array is:", sums);

    // 4 the multiplication of them all
    var product = 1
        for(var i=0; i<numbers.length; i += 1){
            product *= numbers[i];
        }
    console.log("The product of all numbers in this array is:", product);

    // 5 non positive (lower than 0)
    var negatives = numbers.filter(function(number){
        return number < 0;
    });  
    console.log("These are the negative numbers in our array:", negatives);
    
    // 6 print the odd numbers
    var odd = numbers.filter(function(number){
        return (number % 2) != 0;
    });
    console.log("These are the odd numbers in the array:", odd);

    // 7 print the even numbers
    var even = numbers.filter(function(number){
        return (number % 2) == 0;
    });
    console.log("These are the even numbers in the array:", even);
}







mathLibrary.funMath();

var res = mathLibrary.sum(21, 21);
console.log("Result: ", res);

var max = mathLibrary.greater(33, 104);
console.log("This number is greater: ", max);

var smaller = mathLibrary.smaller(0, -1);
console.log("This number is smaller: ", smaller);

var r1 = mathLibrary.division(114, 34050);
console.log("This is the result", r1);

var r2 = mathLibrary.division(114, 0);
console.log("This is the result", r2);

var r4 = mathLibrary.isEven(65);
console.log(r4);

var r5 = mathLibrary.isOdd(65);
console.log(r5);

homeWork();