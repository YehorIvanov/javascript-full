// Напиши 4 ф-ции, которые будут добавлять произвольное свойство в объект разным способом</p>
// <h4>Основные требования:</h4>
/* <li>Все ф-ции должны быть в файле <code>index.js</code></li>
<li>Все ф-ции принимают 3 аргумента: <code>obj</code> - объект, <code>key</code> - строка - название ключа, <code>value</code> - строка - значение свойства под этим ключом</li>
<li>Ф-ции должны добавить в объект свойство с ключом <code>key</code> и значением <code>value</code></li>
<li>В ф-ции <code>addPropertyV1</code> используй квадратные скобки для добавления свойства объекта. Так ты изменишь исходный объект. Не забудь вернуть из ф-ции измененный объект</li>
<li>В ф-ции <code>addPropertyV2</code> используй <code>Object.assign</code>. Так ты изменищь исходный объект. Не забудь вернуть из ф-ции измененный объект</li>
<li>В ф-ции <code>addPropertyV3</code> используй <code>Object.assign</code>. Но используйте его так, чтобы исходный объект не изменился. Здесь по сути нужно создать новый объект и не мутировать старый. Не забудь вернуть из ф-ции измененный объект</li>
<li>В ф-ции <code>addPropertyV4</code> используйте оператор расширения (spread operator). Исходный объект должен остаться неизменным. Не забудь вернуть из ф-ции измененный объект</li>
<li>Как видишь, можно добавить свойство в исходный объект, а можно создать новый на основе старого и туда добавить еще одно свойство. На практике лучше не менять данные, которые приходят в аргументах ф-ции, а создать новые</li>
<li>Смотри пример работы функции в редакторе</li> */
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
const addPropertyV2 = (obj, key, value) => {
  Object.assign(obj, { [key]: value });
  return obj;
};
const addPropertyV3 = (obj, key, value) =>
  Object.assign({}, obj, { [key]: value });
const addPropertyV4 = (obj, key, value) => {
  return { ...obj, [key]: value };
};
// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, "currency", "USD"); // ==> { value: 170, currency: 'USD' }
