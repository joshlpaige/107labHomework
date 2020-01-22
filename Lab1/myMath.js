module.exports = {
    funMath: function(){
        console.log("this is a math module");
    },
    sum: function(num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        // return the largest number
        if(num1 > num2) return num1;
        else return num2;
        
    },
    smaller: function(num1, num2){
        // return the smallest number
        if(num1 < num2) return num1;
        else return num2;
        
    },
    division: function(number, by){
        if(by == 0){
            console.error("DO NOT DIVIDE BY 0, PLEASE!");
            return 0;
        }

        else return number / by;
    },
    isEven: function(num){
        var residue = num % 2;
        if(residue == 0) return true;
        return false;
    },

    isOdd: function(num){
        var residue1 =  num % 2;
        if(residue1 != 0) return true;
        return false;
    },

};