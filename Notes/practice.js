// 1. Write a function to find the longest common prefix string amongst an array of strings.

function findPrefix(arr) {
  if (arr.length < 1) return '';
  let str = '';
  
  for (let i = 0; i < arr[0].length; i++) {
    let firstChar = arr[0][i];
    for (let j = 1; j < arr.length; j++) {
      let secondChar = arr[j][i]
      
      if(firstChar !== secondChar){
        return arr[0].slice(0, i)
      }
    }
  }

  return str;
}

console.log(findPrefix(['prefix', 'prdrf', 'prlss', 'prdifc']))