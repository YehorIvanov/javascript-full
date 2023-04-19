/* <div class="sc-bf073531-0 cSkfsr"><p>Создай цикл, который посчитает произведение всех нечетных чисел от m до n включительно</p>
<h4>Основные требования:</h4>
<ol>
<li>Объяви переменную <code>m</code>, которая содержит целое число больше нуля</li>
<li>Объяви переменную <code>n</code>, которая содержит целое число больше <code>m</code></li>
<li><code>m</code> и <code>n</code> не должны меняться в процессе работы программы</li>
<li>Результат должен храниться в переменной <code>result</code></li>
<li>Вывести результат в консоль. Ничего кроме результата в консоль выводиться не должно</li>
</ol></div> */

const m = 1;
const n = 5;
let result = 1;
for ( let counter = m; counter <= n; counter += 1) {
  if (counter % 2) {
    result *= counter;
  }
  console.log(counter,result)
}
console.log(result);
