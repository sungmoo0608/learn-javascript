let teacher = '짐코딩';
console.log(teacher);
teacher = '홍길동';
console.log(teacher);

// let teacher = '김길동';

const username = '짐코딩';
console.log(username);
// username = 'change';

{
  let a = '변수';
  console.log('a:', a);
  {
    let c = '변수';
    console.log('c 블록 a:', a);
  }
}

// console.log('a:', a);

function sum(a, b) {
  let result = a + b;
  return result;
}

{
  var number = 2;
  var number = 3;
}
console.log(number);

console.log(sum(4, 2));
function sum(num1, num2) {
  return num1 + num2;
}
