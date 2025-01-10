'use strict';

let count = 0;
while (count < 5) {
  console.log(count);
  count++; //연산자 없을시 무한 반복
}

console.log('---------------');

let number = 0;
do {
  console.log(number);
  number++;
} while (number < 5);
