/* <div class="sc-bf073531-0 cSkfsr"><p>Начальный код находится в редакторе. Выведи в консоль результат работы разных операторов</p>
<p>Это задание может показаться скучным, но зато ты лучше разберешься в тонкостях работы всех операторов и преобразовании типов в джаваскрипте. Потом эти знания тебе годами использовать как ни как ;)</p>
<h4>Основные требования:
    <li>Выведи в консоль результат работы каждого оператора в формате <code>[выражение]: [значение выражения]</code> (пример: <code>console.log("undefined + '5':", undefined + '5');</code>)</li>
    <li>Помни про комбинации разных кавычек в строках и возможность экранировать символы с помощью обратного слэша</li>
    <li>Выражения присваивания выводить не нужно</li>
    <li>Каждый оператор должен вызываться один раз</li>
    <li>Внимательно пройдись по всем выражениям и убедись, что для тебя не осталось магии в работе этих операторов ;)</li>
Обязательно протестируй результат работы операторов у себя в консоли
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators">[MDN] Операторы и выражения</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">[MDN] Приоритет операторов</a></li>
</ol></div> */


/* eslint-disable */

// Унарный плюс приводит операнд к числу
console.log("+17 :",+17);
console.log("+'77' :",+'77');


// Бинарный плюс складывает строки или прибавляет числа
console.log("10 + '5' :",10 + '5');
console.log("'some' + 'text' :",'some' + 'text');

// Математические операции с undefined возвращают NaN
console.log("undefined + 1:",undefined + 1);
console.log("null + 8:",null + 8);
console.log("undefined + '5':",undefined + '5';
console.log("7 - null :",7 - null);
console.log("5 - undefined :",5 - undefined);
console.log("'text' + null:",'text' + null);

// Постфиксная и префиксная форма записи
console.log("let num = 17 :",let num = 17);
console.log("++num :",++num);
console.log("num++ :",num++);

// математические операторы приводят операнды к числам
const a = 17;
const b = -a;
console.log()'24' / 4;
console.log()18 * '3';
console.log()'9' - '3';
console.log()'seventeen' / 3;
console.log()4 * 'four';
console.log()17 / 0;

console.log()10 + 'seven';
console.log()undefined + 1;
console.log()null + 8;
console.log()undefined + '5';
console.log()'text' + null;
