'use strict';

// 객체 리터럴 문법
const person = {
  name: '코코코딩',
  age: 30,
};
console.log(person);
console.log('----------------');

// 객체 생성자 문법
const person1 = new Object();
person1.name = '눈코딩';
person1.age = 35;
console.log(person1);
console.log('----------------');

// 객체 프로퍼티 접근
const person2 = {
  name: ['Bob', 'Super'],
  age: 33,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello!');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('programing');
    },
  },
};
console.log(person2);
console.log(person2.name[0]);
console.log(person2.name[1]);
console.log(person2.hobby.name);
//console.log(person2.hobby.alert());
// person2.hello();
console.log('----------------');
person2['name'][1] = '랄랄라';

console.log(person2['name']);
console.log(person2['name'][0]);
console.log(person2['name'][1]);
console.log(person2['hobby']['name']);
person2['hobby']['alert']();
console.log('----------------');

// 삭제
delete person2.name;
delete person2['age'];
console.log(person2);
console.log('----------------');

// 객체 전달
function printPerson(person3) {
  console.log(
    `제 이름은 ${person3.name}이며, 나이는 ${person3.age}살 입니다. 그리고 취미는 ${person3.hobby}입니다.`
  );
}
const person3 = {
  name: '아이코딩',
  age: 33,
  hobby: '숨쉬기',
};
printPerson(person3);
console.log('----------------');

// 구조 분해 할당
const { name, age, hobby } = person3;
console.log('name : ', name);
console.log('age : ', age);
console.log('hobby : ', hobby);

const fruits = ['사과', '포도', '딸기'];
const [a, b] = fruits;
console.log(a);
console.log(b);
console.log('----------------');

// ***** 팩토리 함수 할당 *****
function printHumon({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다. 그리고 취미는 ${hobby}입니다.`
  );
}
function createHumon(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
  };
}
const humon1 = createHumon('이길동1', 22, '없음무');
const humon2 = createHumon('이길동2', 22, '없음무');
const humon3 = createHumon('이길동3', 22, '없음무');
const humon4 = createHumon('이길동4', 22, '없음무');
const humon5 = createHumon('이길동5', 22, '없음무');
printHumon(humon1);
printHumon(humon2);
printHumon(humon3);
printHumon(humon4);
printHumon(humon5);
