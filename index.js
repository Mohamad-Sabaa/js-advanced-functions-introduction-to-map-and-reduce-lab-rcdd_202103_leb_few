// Your code here
function mapToNegativize(arr) {
  arr = [1, 2, 3, -9]
  const newArr = arr.map(function(index) {
    return index * -1;
  })
  return newArr;
}
mapToNegativize(newArr);


function mapToNoChange (dune) {
  dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
  const newDune = dune.map(function(index) {
    return index;
  })
  return newDune;
}
mapToNoChange(newDune);


 function mapToDouble(num) {
   num = [1, 2, 3, -9]
   const double = num.map(function(index) {
     return index * 2;
   })
   return double;
 }
mapToDouble(double);

  function mapToSquare(num) {
    num = [1, 2, 3, -9]
    const square = num.map(function(i) {
      return i * i;
    })
    return square;
  }

  mapToSquare(square);



<<<<<<< HEAD
function reduceToTotal(sourceArray, startingPoint=0) {
  sourceArray = [1,2,3]
  const num = sourceArray.reduce(function(acc, cur) {
=======
function reduceToTotal(sourceArray, startingPoint) {
  sourceArray = [1,2,3]
  startingPoint = 0;
  const num = sourceArray.reduce(function(acc + cur) {
>>>>>>> a75c0f75b1282a89a0c10caa3af54f9ddcec6bbc
    return acc + cur;
  }, startingPoint);
  return num;
  }
 reduceToTotal(num);
<<<<<<< HEAD

function reduceToAllTrue(sourceArray) {
  const reduceValue = sourceArray.reduce(function(acc, cur) {
  if (!!acc == true && !!cur == true) {
    return true
  }else {
    return false;
  }
  })
  return reduceValue;
}



 function reduceToAnyTrue(sourceArray) {
   const reduceTrue = sourceArray.reduce(function(acc, cur) {
     if (!!acc == true && !!cur == true) {
       return true;
     } else {
       return !!cur
     }
   })
   return reduceTrue;
 }
=======
>>>>>>> a75c0f75b1282a89a0c10caa3af54f9ddcec6bbc
