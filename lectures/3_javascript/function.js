'use strict';

// 함수 선언식
function sayHello() {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름 : 홍길동, 나이 : 25살');
}
sayHello();
console.log('---------------------------');

// 함수 표현식
const sayHello2 = function () {
  console.log('이름과 나이를 출력해주세요');
  console.log('이름 : 홍길동, 나이 : 25살');
};
sayHello2();
console.log('---------------------------');

// 함수 표현식 파라미터
const sayHello3 = function (name, age) {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름 : ${name}, 나이 : ${age}살`);
};
sayHello3('나나나나', 30);
sayHello3('바바바바', 35);
console.log('---------------------------');

// 함수 반환
function sum(num1, num2) {
  return num1 + num2;
}
let result = sum(5, 3);
console.log('result : ', result);
console.log('---------------------------');

// 함수 스코프
function aFunc() {
  let name = '박바위';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('bFunc name : ', name);
    console.log('bFunc age : ', age);
    console.log('bFunc job :', job);
  }
  bFunc();
  console.log('aFunc name : ', name);
  console.log('aFunc age : ', age);
  // console.log('job : ', job);
}
aFunc();
console.log('---------------------------');

// 함수 즉시 활용
(function () {
  console.log('hello');
})();

// 매개변수 지정값 없을시 undefined nan 출력
function sum1(num1, num2) {
  console.log('num1 : ', num1);
  console.log('num2 : ', num2);
  return num1 + num2;
}
let result1 = sum1(5);
console.log('result1 : ', result1);
console.log('---------------------------');

// 매개변수 기본값 지정시
function sum2(num1 = 0, num2 = 0) {
  console.log('num1 : ', num1);
  console.log('num2 : ', num2);
  return num1 + num2;
}
let result2 = sum2(5);
console.log('result2 : ', result2);
console.log('---------------------------');

// ***** Arrow Function 화살표 표기법 *****

const hello = (name) => {
  console.log(`Hello ${name}`);
};
hello('버내너');

console.log('---------------------------');

const sayHello4 = (name, age) => {
  console.log('이름과 나이를 출력해주세요');
  console.log(`이름 : ${name}, 나이 : ${age}살`);
};
sayHello4('나나나나', 30);
sayHello4('바바바바', 35);
console.log('---------------------------');

const sum3 = (num1 = 0, num2 = 0) => num1 + num2;
let result3 = sum3(5, 3);
console.log('result3 : ', result3);
console.log('---------------------------');

// ***** 콜백함수 *****
let fruits = ['사과', '바나나', '딸기'];
fruits.forEach(function (item, index) {
  console.log('item: ', item);
});
