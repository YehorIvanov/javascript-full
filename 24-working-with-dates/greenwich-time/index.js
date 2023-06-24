// Напишите функцию, которая вернет время в Гринвиче</p>
// <p>Основные требования:</p>
// <li>Функция должна экспортироваться под именем <code>getGreenwichTime</code></li>
// <li>Сигнатура: <code>getGreenwichTime(date)</code>, где <code>date</code> - объект даты.</li>
// <li>Функция должна вернуть время в формате '06:43'</li>
// <li>Входящая дата должна остаться неизменной</li>

const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return formatter.format(date);
};
