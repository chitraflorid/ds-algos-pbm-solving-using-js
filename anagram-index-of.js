/**
 * This function is figuring out whether anagram of the given substring is present as a substring in the given parent string.
 * If its present, return the starting index of the char present in the anagram substring. Else return -1. 
 * It should also work for  a single character by returning its first index if it's present more than once. else return -1.
 * Eg: parent = "actor", subStr = "cat" return 0 - as a's index is 0. for Substr = "car", return -1.
**/
function aio(parent, subStr) {
        const parentHash = {};
        const sorted = {};
        const subStrLen = subStr.length;
        const parentLen = parent.length;
        const startIndexArr = [];
        
	// case: parent empty or substring is empty or parent is smaller than substring length
        if (!parent || !subStr || parentLen< subStr.length) {
          return -1;
        }
	 
	// Generate parent characters Hashmap. format : { char:[indices] }.
	// Characters in parent string accessed only once.
        generateParentCharHash();
	  
	// case: substr is a single character, return its first index. else return -1.
	if (subStr.length === 1) {
	     const ind = parentHash[subStr[0]];
	     return Array.isArray(ind) ? ind[0] : -1; 
	}
       
	// start processing the first character from the subtring.
 	return processFirstCharIndex();
    
	/**
	 * Process the first character of the substring based on it's first
	 * index present in the parent string. Calculate min and max indices for it's current index / position.
	 * If the first charater not present in the parent, then return -1.
	 * Sort the indices array of first character if its present more than once for the first time.
	 * Check if the first index is within the calculated range. if its not in range, return -1.
	 * Else, remove the first index from the indices array and push it to the startIndexArray.
	 * Proceed to process the next character of the substring.
	 * @return {Number} start index of the subtring anagram or -1.
	**/
        function processFirstCharIndex() {
          const firstChar = subStr.charAt(0);
          const fIArr = parentHash[firstChar];
          let currIndex = fIArr[0];
          let remChars = subStrLen - 1;
          let {min, max} = calculateMinMax(currIndex, remChars, currIndex);
         
          if (!fIArr.length) {
            return -1;
          }
      
          if (!sorted[firstChar] && fIArr.length > 1) {
              sortAsc(fIArr);
              sorted[firstChar] = true;
          }
                
          if (!isCurrIndexInRange(currIndex, min, max, remChars, currIndex)) {
            return -1;
          }
	
	  fIArr.splice(0, 1);
          startIndexArr.push(currIndex);
              
          // process next character 
          return processNextChar(subStr.charAt(1), remChars - 1, currIndex);
        }
      
	/**
	 * Process the remaining characters of the substring recursively.
	 * Take the first index of the given char of the substring present in parent string &
	 * consider it as current index - cI.
	 * Sort the indices array only once for the first time if it has more than once index.
	 * Calculate min and max and verify the current index cI is within the range, min and max.
	 * If its within the range, remove it from the relevant indices array and push it to startIndexArray.
	 * Repeat the same process for the next character.
	 * If all characters in substring is processed, then return the result.
	 * @param char     {String} - current character from subtring to be processed
	 * @param remChars {Number} - remaining character count excluding the current one.
	 * @param startIndex {Number} - first index of the first character of the substring present in parent.
	 * @param charIndex {Number=1} - index of the current char in substring.
	 * @return {Number} start index of the subtring anagram or -1.
	**/
        function processNextChar(char, remChars, startIndex, charIndex = 1) {
	    const posArr = parentHash[char];
       	    const cI = posArr[0];
		
	    if (!sorted[char] && posArr.length > 1) {
          	sortAsc(posArr);
          	sorted[char] = true;
            }
        
	    let {min: updatedMin, max: updatedMax} = calculateMinMax(posArr[0], remChars, startIndex);
                 
            if (isCurrIndexInRange(cI, updatedMin, updatedMax, remChars, startIndex)) {
                startIndexArr.push(cI);
		
		if (remChars === 0) {
                    return res();
                } else {
                    posArr.splice(0, 1);
		    charIndex++;
                    return processNextChar(subStr.charAt(charIndex), remChars - 1, startIndex, charIndex);
                }
            } else {
                return processFirstCharIndex();
            }
       }
       
       /**
        * Helper function.
	* Generates the hashMap for the parent string with key as character and value as it's index / indices array.
       **/
       function generateParentCharHash() {
           for (let i = 0; i < parentLen; i++) {
               const char = parent.charAt(i);
      	       if (!parentHash[char]) {
                   parentHash[char] = [i];
          	} else {
            	   parentHash[char].push(i);
          	}     
           }
	}
    
	/** 
	 * Helper function.
	 * Calculates the min and max indices based on the current Index.
	 * Formulae:
	 * minIndex = currentIndex - remainingCharacters. If less than 0, it's reset to 0.
	 * maxIndex = currentIndex + remainingCharacters. If greater or equal to parent string length,
	 * its reset to parentLength - 1.
	**/
        function calculateMinMax(cI, remChars, startIndex) {
            let min = cI - remChars;
            let max = cI + remChars;

            min = min < 0 ? 0 : min;
            max = max >= parentLen ? (parentLen - 1) : max;   
      	    
	    return ({min, max});
      	}
    
	/**
	 * Helper Function.
	 * Checks whether the given index is within the provided min and max range.
	 * @return {Boolean} true / false
	**/
        function isCurrIndexInRange(cI, min, max, remChars, startIndex) {
            if (cI >= min && cI <= max) {
            	return true;
            } 

           return false;
        }
      
	/**
	 * Helper Function.
	 * Loops through the collected indices of the anagram charater set and verify
	 * wheter they are contiguous or not.
	 * @return {Number} minimum index of the anagram's character set / -1
	**/
        function res() {
      	    sortAsc(startIndexArr);

      	    for (let i = 0; i < startIndexArr.length; i++) {
                if (Math.abs(startIndexArr[i] - startIndexArr[i+1]) > 1) {
          	    return -1;
                }
            }
        
            return startIndexArr[0];
        }
    }
    
    /**
     * Utility Function.
     * Sorts the given array based on numerical value of it's elements in ascending order.
    **/
    function sortAsc(arr) {
        arr.sort((a,b) => a - b);
    }

    // test
    console.log(aio("actor", "car"));
