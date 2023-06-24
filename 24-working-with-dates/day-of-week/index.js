// Напишите функцию, которая выведет день недели через n дней после указанной даты.</p>
// <p>Основные требования:</p>
// <li>Функция должна экспортироваться под именем <code>dayOfWeek</code></li>
// <li>Сигнатура: <code>dayOfWeek(date, days)</code>, где <code>date</code> - объект даты, <code>days</code> - целое число дней.</li>
// <li>Функция должна вернуть строку вида 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'</li>
// <li>Считаем что неделя стартует с воскресенья</li>
// <li>Входящая дата должна остаться неизменной</li>

const dayOfWeek = (date, days) => {
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];
  const day = new Date(date).getDate();
  const dayInFuture = new Date(date).setDate(day + days);
  return daysOfWeek[new Date(dayInFuture).getDay()];
  //   console.log(
  //     `Date: ${date}, Days: ${days}, day: ${day}, dayInFuture: ${
  //       daysOfWeek[new Date(dayInFuture).getDay()]
  //     } `
  //   );
};
