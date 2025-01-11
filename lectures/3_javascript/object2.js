'use strict';

//
let username = '가나다';
console.log(username);
changeName(username);
console.log(username);

function changeName(name) {
  name = '라마바';
  console.log(name);
}
console.log('====================');

let person = {
  name: '사아자',
  age: 29,
};
console.log(person);

changePersonName(person);

function changePersonName(person) {
  person.name = '홍길동';
  person.age = 60;
}
console.log(person);
console.log('====================');

let person1 = {
  name: '파라오오',
  age: 29,
};

let person2 = person1;
let person3 = { ...person1 };
let person4 = Object.assign({}, person1);
//person2.name = '홍길동';
person3.name = '홍길동';
person4.name = '몽룡이';
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log('====================');

console.log('name' in person1);
if ('name' in person1) {
  console.log('존재 합니다.');
} else {
  console.log('존재하지 않습니다.');
}
console.log('====================');

const person5 = {
  name: '아이코딩',
};
console.log(person5.hasOwnProperty('name'));
console.log(Object.hasOwn(person5, 'name'));

if (person5.name) {
  console.log('true~!');
}
