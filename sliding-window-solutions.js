const str = 'AAAHHIBC';
let longestSubStr = '';
let charCount = 0;
const charHash = {};
let max = Number.NEGATIVE_INFINITY;

function findLongestSubstr(str, k = 2) {

	for (let i = 0; i < str.length; i++) {
  		const char = str.charAt(i);
      
      longestSubStr += char;
      
      if (!charHash[char]) {
      		charHash[char] = 1;
          charCount++;
      } else {
      		charHash[char]++;
      }

  		
      while (charCount > k) {
      		const deletedChar = longestSubStr[0];
          longestSubStr = longestSubStr.slice(1);
          
          charHash[deletedChar]--;
          
          if (charHash[deletedChar] === 0) {
          		delete charHash[deletedChar];
              charCount--;
          }
      }
      
      if (charCount === 2) {
      		max = Math.max(max, longestSubStr.length);
      }
            
  }
  
  return max;
}

console.log(findLongestSubstr(str));


/* const str = 'geeksforgeeks';
const target = 'ork'; */
const str = 'ABBAACDBCAB';
const target = 'ABC';
const charHash = {};
let minString = '';
let charCount = 0;
let shortestMinString = '';


function minWindowSubstring(str, target) {
  const maxCharCount = target.length;
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);    
    minString += char;    
    
    if (target.indexOf(char) !== -1) {
      if (!charHash[char]) {
        charHash[char] = 1;
        charCount++;
      } else {
        charHash[char]++;
      }
    }
      
      while (charCount >= maxCharCount) {
        const deletedChar = minString.charAt(0);
        minString = minString.slice(1);
       console.log("minstring after sliced:"+ minString);
       
        if (charHash[deletedChar]) {
          charHash[deletedChar]--;
          
          if (charHash[deletedChar] === 0) {
            delete charHash[deletedChar];
            charCount--;
          }
        }    
        
      if (charCount === maxCharCount){
        if (!shortestMinString) {
          shortestMinString = minString;
        } else {
          shortestMinString = minString.length < shortestMinString.length ? minString : shortestMinString;
        }
       }
      }

  }
  
  return shortestMinString; 
}


console.log(minWindowSubstring(str, target));




[1,2,3,45,6,4];



const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const arr3 = [1, 7, 4, 3, 1, 2, 1, 5, 1];
let index = 0;
const subArr = [];
 subArr[index] = [];
 let windowStart = 0;


function findSubArrays(arr, maxSum = 9) {
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    subArr[index].push(arr[i]);
    
    while (currentSum > maxSum ) {
      currentSum -= arr[windowStart];
      subArr[index].shift();
      windowStart++;
    }
    
    if (currentSum === maxSum && i < arr.length -1) {
        const remainingArr = [...subArr[index]];
        index++;  
        subArr[index] = remainingArr;
      } 
  }
  
  return subArr;  
}


console.log(findSubArrays(arr3));
