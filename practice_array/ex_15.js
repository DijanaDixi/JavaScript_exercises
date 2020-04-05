// We have the following arrays : Go to the editor
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.



    var arr1=["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
    var arr2=["th","st","nd","rd"]
    for(var i=0,j=1;i<arr1.length, j<arr2.length; i++, j++){
        if(j===1){
            console.log(`1${arr2[1]} choise is ${arr1[i]}`)
        }
    }

