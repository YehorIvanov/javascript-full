// Напишите функцию, которая посчитает разницу между двумя датами</p>
// <p>Основные требования:</p>
// <li>Функция должна экспортироваться под именем <code>getDiff</code></li>
// <li>Сигнатура: <code>getDiff(startDate, endDate)</code>, где <code>startDate, endDate</code> - объекты даты.</li>
// <li>Функция должна вернуть разницу в формате <code>275d 2h 58m 16s</code></li>
// <li>Входящие даты должны остаться неизменными</li>
// <li>Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше

const getDiff = (startDate, endDate) => {
  const diff = Math.abs(startDate - endDate);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const result = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return result;
};
