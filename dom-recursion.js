let ele;
// getElementById
function getElementById(nodes, id) {
  if (!nodes) {
    return false;
  }

  for (let child of nodes) {  
    if (child.id === id) {
      ele = child;
    } else {
        if(child.children.length) {
             getElementById(child.children, id);
        }
    }
  }
  return ele;
}

// getElementsByTagName
function getElementsByTagName(nodes, tag) {
  let elements = [];
  
  if (!nodes) {
    return [];
  }
   
  for (let child of nodes) {   
      if (child.nodeName.toLowerCase() === tag) {
          elements = [...elements, child];
      }
      if (child.children.length) {
         elements = [...elements, ...getElementsByTagName(child.children, tag)];
      }
   }
   
   return elements;
 }
 
 // getElementsByClassName
  function getElementsByClassName(nodes, className) {
   let elements = [];
   
   if (!nodes) {
     return [];
   }
   
   for (let child of nodes) {
     if (child.classList.contains(className)) {
       elements = [...elements, child];
     }
     
     if (child.children.length) {
       elements = [...elements, ...getElementsByClassName(child.children, className)];
     }
   }
   
   return elements;
 }
