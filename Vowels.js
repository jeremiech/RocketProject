const input = 'welcome';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++){
//console.log('inputIndex = ' + input[inputIndex]);
  for (let v = 0; v < vowels.length; v++){
    if (input[i] === vowels[v]){
      if (input[i] === 'e'){
          resultArray.push('ee');
          }
              else if (input[i] === 'u'){
            resultArray.push('uu');
          }
      else {
        resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());






