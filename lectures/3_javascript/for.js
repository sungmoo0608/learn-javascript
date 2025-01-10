'use strict';

//
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//
let fruits = ['사과', '배', '포도', '파인애플', '바나나'];
for (let j = 0; j < fruits.length; j++) {
  console.log(fruits[j]);
}

//
let person = {
  name: '홍길동',
  age: 25,
  job: '프로그래머',
};

let key = prompt('어떤 키를 출력할까요?');
console.log(person[key]);

//
let keys = Object.keys(person);
console.log(keys);

for (let i = 0; i < keys.length; i++) {
  // console.log(keys[i]);
  let key = keys[i];
  console.log(person[key]);
}

console.log('------------------');

// for ..in
for (let key in person) {
  console.log(person[key]);
}

console.log('------------------');

// for ..of
let fruits1 = ['사과', '배', '포도', '파인애플', '바나나'];
for (let fruit of fruits1) {
  console.log(fruit);
}
