console.log('1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти. Використовуючи JavaScript, змініть стиль одного або декількох елементів (наприклад, колір фону або розмір шрифту).');
const div1 = document.querySelector('.dom');
div1.style.backgroundColor = 'aqua';
div1.style.fontSize = '24px';
div1.style.textAlign = 'center';
console.log(div1);
const but = document.querySelector('button');
but.style.width = '20%';
but.style.color = 'red';
console.log(but);

console.log('2. Зміна текстового вмісту: Створіть елементи, які містять текст.  За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.');
const p1 = document.querySelector('p');
p1.innerText = 'remove text';
console.log(p1);

console.log('3. Додавання нового елементу: За допомогою JavaScript, додайте 3 нові елемент до DOM-структури.');
const new1 = document.createElement('p');
new1.textContent = 'новий параграф 1';
const new2 = document.createElement('p');
new2.textContent = 'новий параграф 2';
const new3 = document.createElement('div');
new3.textContent = 'новий дів';
const new4 = document.getElementById('task3');
new4.appendChild(new1);
new4.appendChild(new2);
new4.appendChild(new3);
console.log(new4, new1, new2, new3);

console.log('4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.');
new4.removeChild(new1);
new4.removeChild(new3);
console.log(new4);

console.log('5. Зміна атрибутів: Створіть елементи, які мають атрибути  (наприклад, "src" для зображення або "href" для посилання). За допомогою JavaScript, змініть атрибути цих елементів.');
const wiki = document.getElementById('wik');
wiki.setAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Element/setAttribute');
wiki.textContent = 'information';
console.log(wiki);

console.log('6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами.  Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.');
const myList = document.getElementById('list');
const el = Array.from(myList.getElementsByTagName('li'));
el.sort((a, b) => a.textContent.localeCompare(b.textContent));
myList.innerHTML = '';
el.forEach(item => {
    myList.appendChild(item);
});
console.log(myList, el);

console.log('7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript, змініть порядок цих елементів в DOM.');
const el1 = document.getElementById('one');
const el2 = document.getElementById('two');
const el3 = document.getElementById('thre');
const el4 = document.getElementById('four');
const box = document.getElementById('box');
box.appendChild(el3);
box.insertBefore(el2, el1);
console.log(box);

console.log('8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів. Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.');
box.removeChild(el4);
box.removeChild(el3);
console.log(box);

console.log('9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій.');
console.log('на сторінці "str1"');

console.log('10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів, переміщення або видалення існуючих елементів.');
console.log('на сторінці "str2"');

