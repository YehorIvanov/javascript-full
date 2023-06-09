/* <div class="sc-bf073531-0 cSkfsr"><p>Выведи в консоль таблицу умножения от 1 до 5</p>
<h4>Основные требования:</h4>
<ol>
<li>Сообщения должны выводиться в формате <code>3 x 4 = 12</code>. Внимательно следи за пробелами</li>
<li>Выводи по порядку для 1 потом 2 и т.д.</li>
<li>Перед каждым новым числом добавь разделитель вида <code>=&gt; 4 &lt;=</code></li>
<li>Используй циклы</li> */

for (let i = 1; i <= 5; i += 1) {
  console.log("=> " + i + " <=");
  for (let j = 1; j <= 10; j += 1) {
    console.log(i + " x " + j + " = " + i * j);
  }
}
