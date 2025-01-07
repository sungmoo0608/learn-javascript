let addBtn = document.getElementById('button');
let addBeforeBtn = document.getElementById('before');
let inputBox = document.querySelector('input');
let removeTargetBtn = document.querySelector('#target-remove');

let removeBtn = document.querySelector('.remove-btn');

addBtn.addEventListener('click', function () {
  alert('hello');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  li.textContent = inputBox.value;

  let button = document.createElement('button');
  button.textContent = 'X';
  // button.setAttribute('class', 'remove-btn');
  button.classList.add('remove-btn');
  button.addEventListener('click', removeParentNode);
  li.appendChild(button);
  ul.appendChild(li);
  // inputBox.value = '';
  // inputBox.focus();
});

addBeforeBtn.addEventListener('click', function () {
  alert('hello');
  let li = document.createElement('li');
  let ul = document.querySelector('ul');
  let targertLi = document.querySelector('li#target');
  li.textContent = inputBox.value;
  //ul.appendChild(li);
  ul.insertBefore(li, targertLi);
});

removeTargetBtn.addEventListener('click', function () {
  let targetLi = document.querySelector('li#target');
  targetLi.remove();
});

removeBtn.addEventListener('click', removeParentNode);

function removeParentNode(event) {
  event.target.parentNode.remove();
  inputBox.value = '';
  inputBox.focus();
}
