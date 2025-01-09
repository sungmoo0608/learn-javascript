'use strict';

// 1. 배열 생성
const fruits = ['사과', '바나나', '딸기', '사과', '바나나', '파인애플'];
// const fruits = new Array('사과', '바나나', '딸기');
console.log('fruits: ', fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[2] = '자두';
console.log(fruits[2]);

// 2. 자주 사용하는 배열 API
// length
console.log('fruits.length: ', fruits.length);
console.log('마지막 값 : ', fruits[fruits.length - 1]);

// push()
fruits.push('귤');
console.log(fruits);

// forEach()
fruits.forEach(function (item, index) {
  console.log(index, item);
});

// pop()
fruits.pop();
let removedItem = fruits.pop();
console.log('removedItem : ', removedItem);
console.log('제거완료: ', fruits);

// shift()
fruits.shift();
fruits.shift();
console.log('제거완료: ', fruits);

// unshift()
fruits.unshift('수박');
console.log('추가완료: ', fruits);

// indexOf()
const index = fruits.indexOf('사과');
console.log('index: ', index);

// splice()
const findIndex = fruits.indexOf('바나나');
console.log('findIndex: ', findIndex);
fruits.splice(findIndex, 1);
console.log(fruits);

// fruits.splice(1, 1);
// console.log(fruits);

// 3. 구조 분해 할당
let fruits1 = ['사과', '바나나', '딸기'];
// let apple = fruits1[0];
// let banana = fruits1[1];
// let strawberry = fruits1[2];

let [apple, banana, strawberry, ...others] = [
  '사과',
  '바나나',
  '딸기',
  'a',
  'b',
  'c',
  'd',
  'e',
];
console.log(apple);
console.log(banana);
console.log(strawberry);
console.log(others);

// 4. 전개 구문
let fruits2 = ['사과', '바나나', '딸기'];
let fruits3 = ['포도', '복숭아', '배'];
let items = [...fruits2, ...fruits3];
console.log('item: ', items);

// 5. Rest parameter
print('a', 'b', 'c');

function print(...values) {
  console.log(values);

  console.log(values[0]);
  console.log(values[1]);
  console.log(values[2]);

  values.forEach(function (value, index) {
    console.log('index: ', index, 'value: ', value);
  });
}

// 얕은 복사(Shallow copy)
let source = ['사과', '바나나', '딸기'];
let target = source;
target[0] = '파인애플';
console.log('source : ', source);
console.log('target : ', target);

// 깊은 복사(deep copy)
let source1 = ['사과', '바나나', '딸기'];
let target1 = [...source1];
let target2 = Array.from(source1);
let target3 = source1.slice();
target1[0] = '파인애플1';
target2[0] = '파인애플2';
target3[0] = '파인애플3';
console.log('source1 : ', source1);
console.log('target1 : ', target1);
console.log('target2 : ', target2);
console.log('target3 : ', target3);
