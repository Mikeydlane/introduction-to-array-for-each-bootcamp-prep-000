function changeCompletely(element, index, array){
  array[index] = element * 100
}

function doToElementsInArray(array, callback) {
   array.forEach(callback);
}
