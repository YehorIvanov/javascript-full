// Теперь попрактикуемся с использованием всех операторов вместе. Начальный код находится в редакторе. 
// Установи правильные операторы на месте <code>/**/</code> так, чтобы результат удовлетворял требования ниже</p>
// <h4>Основные требования:
// <li>Переменная <code>activeUser</code> должна иметь значение <code>'anonymus'</code></li>
// <li>Переменная <code>hasAccess</code> должна иметь значение <code>true</code></li>
// <li>Переменная <code>isTruthy</code> должна иметь значение <code>true</code></li>
// <li>Переменная <code>isFalsy</code> должна иметь значение <code>false</code></li>
// <li>Переменная <code>isNotTrue</code> должна иметь значение <code>false</code></li>
// <li>Переменная <code>isTrue</code> должна иметь значение <code>true</code></li>
// <h4>Полезные материалы:
// <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators">[MDN] Операторы и выражения</a></li>
// <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">[MDN] Приоритет операторов</a></li> 


/* eslint-disable */

/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* Раскоментируй код ниже, используя правильные операторы после знака присваивания */

const activeUser = anotherUser || defaultUserName;
const hasAccess = isAdmin || isLoggedIn;
const isTruthy =  !! message || anotherMessage;
const isFalsy = ! isLoggedIn;
const isNotTrue = typeof message == 'number';
const isTrue = typeof message != 'boolean';
