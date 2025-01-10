'use strict';

console.log(1 + 2);
console.log('javascript ' + 'hello');
console.log('javascript' + 2);

// continue 이어서 하는
let text = '';

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    continue;
  }
  text = text + i;
  console.log(`text[${i}]:`, text);
}
console.log(text);

console.log('----------------------');

// break 멈추는
let text1 = '';

for (let i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  text1 = text1 + i;
}
console.log(text1);
