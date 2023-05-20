/* <div class="sc-bf073531-0 cSkfsr"><p>Создайте функцию, которая найдет в объекте всех людей, которым исполнилось 18 лет</p>
<p>Основные требования:</p>
<li>Функция с именем <code>getAdults</code> должна принимать объект вида <code>{ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }</code>, где ключ - имя человека, значение - его возраст</li>
<li>Функция должна вернуть массив всех людей, кто старше 18 лет включительно</li>
<li>Для пустого объекта ф-ция должна вернуть пустой массив</li>
<li>Пример работы: <code>{ 'John Doe': 19, 'Tom': 17, 'Bob': 18 }</code> =&gt; <code>['John Doe', 'Bob']</code></li> */

const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);
// put your code here

// <div class="sc-bf073531-0 cSkfsr"><p>Создайте функцию, которая будет копировать объект</p>
// <p>Основные требования:</p>
// <li>Функция с именем <code>copyObj</code> должна принимать объект и возвращать его копию (первого уровня)</li>
// <li>Исходный объект должен остаться неизменным</li>

const copyObj = (obj) => {
  return { ...obj };
};
// put your code here

// <div class="sc-bf073531-0 cSkfsr"><p>Напишем функцию, которая будет принять объект и выводить в консоль по очереди все свойства этого объекта</p>
// <h4>Основные требования:</h4>
// <li>Создай ф-цию <code>getKeys</code> в файле <code>index.js</code></li>
// <li>Ф-ция должна принимать объект как единственный аргумент и вывести в консоль название всех ключей этого объекта</li>
// <li>Для перебора ключей объекта используй метод <code>Object.keys</code></li>
// <li>Не используй цикл <code>for..in</code> - он может решить текущую задачу, но он устарел и в некоторых случаях может отработать не так, как ты того ожидаешь. Раньше мы смотрели его только для практики</li>
// <h4>Подсказки и типичные ошибки:</h4>
// <li>Выводить нужно не <b>массив</b> ключей, а каждый ключ <b>отдельно</b> с новой строки</li>

const getKeys = (obj) => Object.keys(obj).forEach((key) => console.log(key));

// Напиши 4 ф-ции, которые будут добавлять свойство в объект разным способом</p>
// <h4>Основные требования:</h4>
// <li>Все ф-ции должны быть в файле <code>index.js</code></li>
// <li>Все ф-ции принимают 2 аргумента: <code>userData</code> - объект пользователя и <code>userId</code> - строка - идентификатор пользователя</li>
// <li>Ф-ции должны добавить в объект пользователя свойство <code>id</code> со значением из второго аргумента ф-ции (<code>userId</code>)</li>
// <li>В ф-ции <code>addPropertyV1</code> просто используй оператор "точка" для добавления свойства объекта. Так ты изменишь исходный объект. Не забудь вернуть из ф-ции измененный объект</li>
// <li>В ф-ции <code>addPropertyV2</code> используй <code>Object.assign</code>. Так ты изменишь исходный объект. Не забудь вернуть из ф-ции измененный объект</li>
// <li>В ф-ции <code>addPropertyV3</code> используй <code>Object.assign</code>. Но используй его так, чтобы исходный объект не изменился. Здесь по сути нужно создать новый объект и не мутировать старый. Не забудь вернуть из ф-ции измененный объект</li>
// <li>В ф-ции <code>addPropertyV4</code> используй оператор расширения (spread operator). Исходный объект должен остаться неизменным. Не забудь вернуть из ф-ции измененный объект</li>
// <li>Как видишь, можно добавить свойство в исходный объект, а можно создать новый на основе старого и туда добавить еще одно свойство. На практике лучше не менять данные, которые приходят в аргументах ф-ции, а создать новые</li>
// <li>Смотри пример работы функции в редакторе</li>

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

const addPropertyV2 = (userData, userId) =>
  Object.assign(userData, { id: userId });

const addPropertyV3 = (userData, userId) =>
  Object.assign({}, userData, { id: userId });

const addPropertyV4 = (userData, userId) => {
  return { ...userData, id: userId };
};

// examples
const user = {
  name: "Sam",
};
addPropertyV1(user, "1234567"); // ==> { name: 'Sam', id: '1234567' }

// Напиши 4 ф-ции, которые будут мержить (сливать) один объединять с другим</p>
// <li>Все ф-ции должны быть в файле <code>index.js</code></li>
// <li>Все ф-ции принимают 2 аргумента: <code>obj1</code> - объект, <code>obj2</code> - объект</li>
// <li>Ф-ции должны создать один объект, в котором будут все свойства из первого и второго объекта</li>
// <li>Ф-ция <code>mergeObjectsV1</code> должна слить объекты так, что в приоритете должны быть свойства из ВТОРОГО объекта. То есть, если в <code>obj1</code> и <code>obj2</code> есть свойства с одинаковыми ключами, то в результат должно попасть свойство из <code>obj2</code>. Используйте <code>Object.assign</code> для слияния объектов</li>
// <li>Ф-ция <code>mergeObjectsV2</code> должна слить объекты так, что в приоритете должны быть свойства из ПЕРВОГО объекта. То есть, если в <code>obj1</code> и <code>obj2</code> есть свойства с одинаковыми ключами, то в результат должно попасть свойство из <code>obj1</code>. Используйте <code>Object.assign</code> для слияния объектов</li>
// <li>Ф-ция <code>mergeObjectsV3</code> должна слить объекты так, что в приоритете должны быть свойства из ВТОРОГО объекта. То есть, если в <code>obj1</code> и <code>obj2</code> есть свойства с одинаковыми ключами, то в результат должно попасть свойство из <code>obj2</code>. Используйте spread operator для слияния объектов</li>
// <li>Ф-ция <code>mergeObjectsV4</code> должна слить объекты так, что в приоритете должны быть свойства из ПЕРВОГО объекта. То есть, если в <code>obj1</code> и <code>obj2</code> есть свойства с одинаковыми ключами, то в результат должно попасть свойство из <code>obj1</code>. Используйте spread operator для слияния объектов</li>
// <li>В любом случае объекты <code>obj1</code> и <code>obj2</code> должны остаться неизменными</li>

const mergeObjectsV1 = (obj1, obj2) => Object.assign({}, obj1, obj2);
const mergeObjectsV2 = (obj1, obj2) => Object.assign({}, obj2, obj1);
const mergeObjectsV3 = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
const mergeObjectsV4 = (obj1, obj2) => {
  return { ...obj2, ...obj1 };
};
// examples
// const obj1 = {
//   name: "Tom",
//   age: 17,
// };
// const obj2 = {
//   name: "Bob",
//   student: false,
// };
// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

// Данные о жителях дома храняться в виде объекта в формате</p>
// const rooms = {
// room1: [
// { name: 'Jack' },
// { name: 'Andrey' },
// { name: 'Ann' },
// { name: 'Vasyl' },
// ],
// room2: [
// { name: 'Dan' },
// ],
// room3: [
// { name: 'Denis' },
// { name: 'Max' },
// { name: 'Alex' },
// ],
// };
// </pre>
// <p>Нужно написать функцию, которая такой объект преобразует в массив имен жителей</p>
// <li>Функция с именем <code>getPeople</code> должна принимать объект в заданом выше формате
// <li>Функция должна вернуть список имен пользователей в виде массива (плоский массив строк <code>['Jack', 'Andrey', ... 'Dan', 'Denis', ...]</code>)</li>
// <li>Количество комнат и количество людей в комнате может быть любым</li>
// <li>Пользуйся разнообразием методов массивов и объектов. Обычный цикл <code>for</code> для финального решения этой задачи не подходит</li>

const getPeople = (obj) =>
  [].concat(...Object.values(obj)).map((person) => person.name);

/* <p>Задан массив транзакций. Нужно посчитать итоговую сумму транзакций</p>
<li>Ф-ция должна называться <code>getTotalRevenue</code> 
<li><code>getTotalRevenue</code> принимает массив транзакций в первом аргументе</li>
<li><code>getTotalRevenue</code> должна вернуть число - сумму всех транзакций</li>
<li>Смотри пример работы функции в редакторе</li>     */

const getTotalRevenue = (transactions) =>
  transactions.reduce((acc, elem) => acc + elem.amount, 0);

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: "sell" },
  { userId: 22, amount: 160, operation: "buy" },
  { userId: 44, amount: 90, operation: "sell" },
];

// Есть два массива одинаковой длины. Нужно создать объект на основе данных в этих массивах. В первом массиве - название ключей объекта, во втором - значение ключей под соответствующим индексом</p>
// <h4>Основные требования:</h4>
//     <li>Ф-ция <code>buildObject</code> должна быть в файле <code>index.js</code></li>
//     <li><code>buildObject</code> принимает 2 аргумента: <code>keysList</code> - массив строк, <code>valuesList</code> - массив строк</li>
//     <li>В массивах может быть любое количество элементов. Важно, что длина из одинаковая
//     <li>Для решения попробуй использовать метод массива <code>.reduce</code> и вычислимые свойства объекта</li>
//     <li>Помни, что <code>.reduce</code> принимает не только 2 аргумента</li>
//     <li>Принимается решение и с обычным циклом <code>for</code>

const buildObject = (keysList, valuesList) => {
  return keysList.reduce((obj, key, index) => {
    return { ...obj, [key]: valuesList[index] };
  }, {});
};
// examples
const keys = ["name", "address", "age"];
const values = ["Bob", "Ukraine", 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

function compareObjects(firstObj, secondObj) {
  if (Object.values(firstObj).length !== Object.values(secondObj).length)
    return false;
  return Object.keys(firstObj).every((key) => firstObj[key] === secondObj[key]);
}

// examples
const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

const obj5 = {
  age: 17,
  name: "Tom",
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
compareObjects(obj4, obj5); // ==> true

const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
};

const getRandomNumbers = (length, from, to) => {
  from = Math.ceil(from);
  to = Math.floor(to);
  if (to - from <= 0) return null;
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(Math.floor(Math.random() * (to - from) + from));
  }
  return result;
};
