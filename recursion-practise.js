  // prints HelloWorld for the given counts
  function printHelloWorld(count) {
    if (count <= 0) {
      return;
    }
    printHelloWorld(count - 1);
    
     console.log("Hello World!!" + count);    
  }
  
  // Reverse the given string recursively
  function reverseString(str, pos = str.length - 1, rev = '') {
    console.log("pos::"+ pos + " rev::" + rev);
    if (pos < 0) {
      return rev;
    }
    
    rev += str[pos];
    return reverseString(str, pos - 1, rev);
  }
  
  // loop the given Array recursively
    function loopArrayRecursively(arr, pos = 0) {
    if (pos >= arr.length) {
      return;
    }
    
    console.log(arr[pos]);
    loopArrayRecursively(arr, pos + 1);
  }
  
  // Palindrom check recursively
    function recursivePalindromeCheck(str, pos = str.length - 1, reverse = '') {
    if (str.length < 1) {
      return false;
    }
    
    if (pos < 0) {
      return reverse === str ? true : false;
    }
    
    reverse += str[pos]; 
    return recursivePalindromeCheck(str, pos - 1, reverse);
  }
  
  // transform array recursively
    Array.prototype.myMap = function(cb, thisArg = null) {
    const res = [];
    const src = this;
    
    function transform(index) {
      if (index >= src.length) {
        return;
      }
      
      
      const ele = src.slice(index, index + 1);
      res.push(cb.call(thisArg, ele, index, src));
      return transform(index + 1);
    }
    
    transform(0);
    
    return res;
  };
  
  
    function sumRange(n) {
    if (n <= 1) return n;
    
    return n + sumRange(n - 1);
  }
  
    function power(n, m) {
    if (m <= 0) return 1;
    
    return n * power(n, m - 1); 
  }
  
    const memoiz = {};
  
  function factorial(n) {
    if (n < 1) return 1;
    
    if (memoiz[n]) {
      return memoiz[n];
    } else {
      return memoiz[n] = n * factorial(n - 1);
    }
  }
  
  
  
//Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
  function all(cb, [head, ...tail]) {
    if (!head) {
      return;
    }
    
    if (!cb(head)) {
      return false;
    } else {
      return true;
    }
    
    return all(tail);  
  }
  
  //Write a function called productOfArray which takes in an array of numbers and returns the product of them all
  function product(n) {
    let res = 1;
    
    function multiply([head, ...tail]) {
      if (!head) {
        return res;
      }
      
      return res *= head * multiply(tail);
    }
    
     return multiply(n);
  }
  
    // Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

  let nestedObject = {
      data: {
          info: {
              stuff: {
                  thing: {
                      moreStuff: {
                          magicNumber: 44,
                          something: 'foo2'
                      }
                  }
              }
          }
      }
  };
  
  
  function contains(obj, val) {
    if (!obj) {
      return false;
    }
    
    for (key in obj) {
      const value = obj[key];
      
      if (value.toString() === '[object Object]') {
        return contains(value, val);
      } else {
        if (value === val) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  // Given a multi-dimensional integer array, return the total number of integers stored inside this array
  
  function totalIntegers([head, ...tail]) {
    let count = 0;
    if (head === undefined || head === null || head === []) {
      return 0;
    }
    
    if (typeof head === 'number') {
       count += 1; 
      
    } else if (Array.isArray(head)) {
         count += totalIntegers(head);
        
    }   
    
    return count + totalIntegers(tail);
  }
  
  // version 2 of totalIntegers using array.reduce
    function totalIntegers(arr) {
    return arr.reduce((acc, ele, index) => {
      if (Array.isArray(ele)) {
        acc = acc + totalIntegers(ele);
      } else {
        if (typeof ele === 'number') {
          acc = acc + 1;
        }
      }
      return acc;
    }, 0);
  }
  
  //Write a function that sums squares of numbers in list that may contain more lists
    function sumSquares([head, ...tail]) {
    let sum = 0;
    
    if (!head) {
      return 0;
    }
    
    if (typeof head === 'number') {
      sum += head * head;
    } else if (Array.isArray(head)) {
      sum += sumSquares(head);
    }
    
    return sum + sumSquares(tail);
    
  }
  
  //The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. 
  // If the times argument is negative, return an empty array.
     
  function replicate(times, target) {
    let res = [];
    
    if (times <= 0) {
      return res;
    }
    
    res = [...res, target];
    return [...res, ...replicate(times - 1, target)];
  }

