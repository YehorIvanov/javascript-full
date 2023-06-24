// Напишите функцию, которая сгруппирует студентов по дню рождения</p>
// <p>Основные требования:</p>
// <li>Функция должна экспортироваться под именем <code>studentsBirthDays</code></li>
// <li>Сигнатура: <code>studentsBirthDays(students)</code> =&gt; <code>{ Jan: ['Tom', 'Ben'], Mar: ['Sam'] }</code>, где <code>students</code> - массив вида <code>[{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }, { name: 'Sam', birthDate: '03/15/2010' }]</code></li>
// <li>Внутри каждого месяца студенты должны быть отсортированы по дате (день месяца по счету)</li>
// <li>Входящий массив должен остаться неизменным</li>

const students = [
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Tom", birthDate: "01/15/2010" },
];
// console.log(students[0].birthDate);
// console.log(new Date(students[0].birthDate));

const studentsBirthDays = (students) => {
  const months = {};
  students
    .sort((a, b) => {
      const dateA = new Date(a.birthDate);
      const dateB = new Date(b.birthDate);
      return dateA.getDate() - dateB.getDate();
    })
    .forEach((element) => {
      const birthDate = new Date(element.birthDate);
      const monthName = new Intl.DateTimeFormat("en", {
        month: "short",
      }).format(birthDate);
      if (!months[monthName]) {
        months[monthName] = [];
      }
      months[monthName].push(element.name);
    });
  console.log(months);
  return months;
};
studentsBirthDays(students);
