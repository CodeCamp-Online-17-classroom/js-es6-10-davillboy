// write code here
function cloneObject(obj) {
  return { ...obj };
}

const originalObject = { a: 1, b: 2, c: 3 };
const clonedObject = cloneObject(originalObject);

console.log(originalObject); 
console.log(clonedObject); 
