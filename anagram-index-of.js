  function aio(parent, subStr) {
        const parentHash = {};
        const sorted = {};
        const subStrLen = subStr.length;
        const parentLen = parent.length;
        const startIndexArr = [];
    
        if (!parent || !subStr || parentLen< subStr.length) {
          return -1;
        }
	 
        generateParentCharHash();    
       
 	return processFirstCharIndex();
    
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
          return processNextChar(subStr.charAt(1), min, max, remChars - 1, currIndex);
        }
      
        function processNextChar(char, min, max, remChars, startIndex, charIndex = 1) {
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
                    return processNextChar(subStr.charAt(charIndex), updatedMin, updatedMax, remChars - 1, startIndex, charIndex);
                }
            } else {
                return processFirstCharIndex();
            }
       }
	  
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
    
        function calculateMinMax(cI, remChars, startIndex) {
            let min = cI - remChars;
            let max = cI + remChars;

            min = min < 0 ? 0 : min;
            max = max >= parentLen ? (parentLen - 1) : max;   
      	    
	    return ({min, max});
      	}
    
        function isCurrIndexInRange(cI, min, max, remChars, startIndex) {
            if (cI >= min && cI <= max) {
            	return true;
            } 

           return false;
        }
      
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
    
    function sortAsc(arr) {
        arr.sort((a,b) => a - b);
    }

    console.log(aio("actor", "car"));
