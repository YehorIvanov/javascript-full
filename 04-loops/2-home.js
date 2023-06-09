/* eslint-disable no-continue */
/* <div class="sc-bf073531-0 cSkfsr"><p>Создай цикл, который пройдет по всем числам от <code>start</code> к <code>end</code> и в зависимости от кратности числа будет применять к нему разные математические операции</p>
<h4>Основные требования:</h4>
<ol>
<li>Объяви переменную <code>start</code>, которая содержит целое число больше нуля</li>
<li>Объяви переменную <code>end</code>, которая содержит целое число больше <code>start</code> и 
<code>&lt;= 100</code></li>
<li><code>start</code> и <code>end</code> не должны меняться в процессе работы программы</li>
<li>Граничные числа <code>start</code> и <code>end</code> должны включаться в рассчет</li>
<li>Результат должен храниться в переменной <code>result</code>, начальное значение <code>result</code> - 0</li>
<li>Выполни действия ниже - <b>порядок выполнения условий важен</b>:
<li>Если число кратно 5 - просто выведи в консоль это число и не изменяй результат</li>
<li>Если число кратно 2 но не кратно 4 - прибавь его к результату</li>
<li>Если число кратно 3 - отними его от результата</li>
<li>Если число кратно 4 - умножь его на результат</li>
<li>Если число не попадает под условия выше, то пропускаем его</li>
<li>Число должно попадать только под <b>ОДНО</b> условие. Если число пападает под несколько условий - выполнится должно первое из них</li>
<li>Значение <code>result</code> в консоль не выводим</li>
<li>Перед отправкой своего решения на проверку, потестируй его локально и убедись что все условия задачи выполняются</li>     */

const start = 1;
const end = 31;
let result = 0;
for (let counter = start; counter <= end; counter += 1) {
  console.log("counter:" + counter);
  console.log("result:" + result);
  if (counter % 5 === 0) {
    console.log("число кратно 5");
    console.log(counter);
    continue;
  }
  if (counter % 2 === 0 && counter % 4 !== 0) {
    console.log("число кратно 2 но не кратно 4");
    result += counter;
    continue;
  }
  if (counter % 3 === 0) {
    console.log("число кратно 3");
    result -= counter;
    continue;
  }
  if (counter % 4 === 0) {
    console.log("число кратно 4");
    result *= counter;
    continue;
  }
}
