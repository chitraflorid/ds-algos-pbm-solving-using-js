  function aio(parent, subStr) {
        const parentHash = {};
        const sorted = {};
        const subStrLen = subStr.length;
        const parentLen = parent.length;
        const startIndexArr = [];
    
        if (!parent || !subStr || parentLen< subStr.length) {
          return -1;
        }
        
        
        for (let i = 0; i < parentLen; i++) {
          const char = parent.charAt(i);
      
          if (!parentHash[char]) {
            parentHash[char] = [i];
          } else {
            parentHash[char].push(i);
          }     
        }
    
        return processFirstCharIndex();
    
        function processFirstCharIndex() {
        console.log("@ processFirstCharIndex!!");
          const firstChar = subStr.charAt(0);
          const fIArr = parentHash[firstChar];
          let currIndex = fIArr[0];
          let remChars = subStrLen - 1;
          console.log("remChars after first::"+ remChars);
          
          let {min, max} = recalculateMinMax(currIndex, remChars, currIndex);
         
          if (!fIArr.length) {
            return -1;
          }
      
          if (!sorted[firstChar] && fIArr.length > 1) {
          	sortAsc(fIArr);
            sorted[firstChar] = true;
          }
          
          console.log("min::"+ min + "  max::" + max);
          
          currIndex = checkCurrIndexIsInRange(firstChar, min, max, remChars, currIndex);
          
           console.log( "currIndex after range checking::"+ currIndex);          
          console.log("Updated remChars::"+ remChars);

          
          if (currIndex === -1) {
            return -1;
          }

          if (remChars === 0) {
            sortAsc(startIndexArr);

           return startIndexArr[0];
          
            
          } else {
            fIArr.splice(0, 1);
            startIndexArr.push(currIndex);
              
            // process next character 
            return processNextChar(subStr.charAt(1), min, max, remChars-1, currIndex);
          }
        }
      
        function processNextChar(char, min, max, remChars, startIndex, charIndex = 1) {
        console.log("@ processNextChar!! for char::===> "+ char + "===>@index::"+ charIndex);
       
       let {min: updatedMin, max: updatedMax} = recalculateMinMax(parentHash[char][0], remChars, startIndex);
               const cI = checkCurrIndexIsInRange(char, updatedMin, updatedMax, remChars, startIndex);
              
             // remChars -= 1;
              console.log("currentIndex ::" + cI + "remChars::"+ remChars);
                 
              if (cI !== -1) {
               startIndexArr.push(cI);

                  if (remChars === 0) {
                      sortAsc(startIndexArr);
                      console.log("startIndexArr::");
                      console.log(startIndexArr);
             
            					return res();
    
                    } else {
                       parentHash[char].splice(0, 1);
												charIndex++;
                      return processNextChar(subStr.charAt(charIndex), updatedMin, updatedMax, remChars - 1, startIndex, charIndex);
                    }
                } else {
                    return processFirstCharIndex();
                }
       }
    
      function recalculateMinMax(cI, remChars, startIndex) {
      console.log("@ recalculateMinMax");
      console.log("cI::"+ cI + "==> remChars::" + remChars + "===>startIndex::"+ startIndex);
      
        let min = cI - remChars;
        let max = cI + remChars;

        min = min < 0 ? 0 : min;
        max = max >= parentLen ? (parentLen - 1) : max;   
       
       console.log( "updated min max:: ==> min::"+ min + " max::"+ max);

        return ({min, max});
      }
    
      function checkCurrIndexIsInRange(char, min, max, remChars, startIndex) {
      console.log("@ checkCurrIndexIsInRange!!!");
    
        const posArr = parentHash[char];
        console.log("posArr:");
        console.log(posArr);
  
        if (!sorted[char] && posArr.length > 1) {
          sortAsc(posArr);
          sorted[char] = true;
        }
        
      
        const cI = posArr[0];
      
        console.log( "current Index::"+ cI);
        console.log("remChars::" + remChars);
        console.log("min::" + min + "==> max::"+ max);
      
        if (cI >= min && cI <= max) {
        console.log("current index within range!!");
        	return cI;
         } 
       
         return -1;
      }
      
      function res() {
      console.log("calculating final res!!");
      console.log(startIndexArr);
      
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
