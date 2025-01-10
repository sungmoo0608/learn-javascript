'use strict';

//문자열 병합
console.log('Hello ' + 'world!');
console.log('3' + 3); // number -> string
console.log(typeof ('3' + 3)); // number -> string
console.log('3' + 5 + 8);
console.log(3 + 5 + '8');

console.log('==================');
//산술연산
let x = 10;
let y = 20;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(9 % 4);

console.log('==================');
// let number = prompt('숫자를 입력해주세요!');
// if (number % 2 === 0) {
//   alert('짝수입니다.');
// } else {
//   alert('홀수입니다.');
// }

// 증감연산자
console.log('==================');
let result = x + y--;
console.log('x: ', x);
console.log('y: ', y);
console.log('result: ', result);

console.log('==================');
let a = 20;
let b = 10;
console.log(a > b);

console.log('==================');
let c = 20;
let d = 20;
console.log(c == d);

console.log('==================');
let e = 20;
let f = '20';
console.log(e === f);
console.log(e !== f);
console.log(e != f);

console.log('==================');
let g = 10;
let h = 10;
// g = g + h;
g += h;
console.log(g);

// 1부터 10까지 더하는
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(`${i} 번째 sum=${sum}`);
}
console.log(sum);

let xx = false;
let yy = true;
console.log(xx && yy); // 모두 true 일 때 true, 그 외 false
console.log(xx || yy); // 둘 중 하나라도 true 일 때 true, 나머지 false
console.log(!xx);
console.log(!yy);

let btn = document.querySelector('#btn');
let emailEl = document.querySelector('[name=email]');
let passwordEl = document.querySelector('[name=password]');
btn.addEventListener('click', function () {
  let email = emailEl.value;
  let password = passwordEl.value;
  console.log('email : ', email);
  console.log('password : ', password);
  console.log('!password : ', !password);

  if (email === '' || email.includes('@') === false) {
    console.log('이메일이 유효하지 않습니다.');
  } else if (!password) {
    console.log('비밀번호를 입력해주세요.');
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    console.log('비밀번호를 8~16 자 로 설정해주세요');
  } else {
    console.log('로그인 성공!');
  }
});

let number = 7;
let message = null;
if (number % 2 === 1) {
  message = '홀수 입니다.';
} else {
  message = '짝수 입니다.';
}
console.log(message);

console.log('=====삼항연산자=====');

let message1 = number % 2 === 1 ? '홀수 입니다.' : '짝수 입니다.';
console.log(message1);
