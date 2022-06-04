//Do the below programs in anonymous function & IIFE
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size
// Remove duplicates from an array
// Rotate an array by k times



//Answers-Anonymous function
// //1)Print odd numbers in an array
// function (array){

// for(i=0;i<10;i++)
// {
//     if(i%2!=0)
//     {
//         return i;
//     }
// };

// }





// 2) Convert all the strings to title caps in a string array

function titlecaps(str){
str=str.toUpperCase().split(" ");
for(i=0;i<str.length;i++)
{
    str[i]=str[i].toLowerCase();
    return str.join(" ");
}
}
console.log(titlecaps("WELCOMERHAGAVI"))




//3)Sum of all numbers in an array

var x=[1,2,3,4,5];
let sum=0;
for(i=0;i<x.length;i++)
{
    sum+=x[i];
}



console.log(sum);

//4) Return all the prime numbers in an array

//using IIFE

(function ()
{
console.log([1,3,5,7]);

})();


//5) Return all the palindromes in an array

//using IIFE

(function ()
{
   var res=console.log("madam");
return res;
})();


//2nd way

function palindrome(str)
{
var leng=str.length;
var mid=Math.floor(leng/2);

for (i=0;i< mid;i++)


{
    if(str[i]!==str[leng-1-i])
    {
        return false;
    }
    else
    {
      return  str;
    }
}
}


console.log(palindrome("madam"));







// //6)Return median of two sorted arrays of the same size
// function array(arr1,arr2,n)
// {
// var  arr1=[2,4,6,8,10];
// var arr2=[1,3,5,7,9];
// var n1=ar1.length;
// var n2=ar2.length;
// if(n1=n2)
// {
//     console.log("")
// }
// }

//7)Remove duplicates from an array

//8) Rotate an array by k times
function duplicates(arr,k)
{
for(i=0;i<k;i++)
{
    let temp=arr[0];
    for(j=0;j<arr.length;j++)
    {
        arr[j]=arr[j+1];

    }
    arr[arr.length-1]=temp;

}
return arr;

}
let arr=[1,3,5,7,9];
let k=2

console.log(duplicates(arr,k));



//
// Do the below programs in arrow functions
// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array









