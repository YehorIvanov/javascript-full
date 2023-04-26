// <div class="sc-bf073531-0 cSkfsr"><p>У нас в Gromcode University часто возникают разные задачи, которые мы автоматизируем всеми возможными способами. Например, часто приходится отправить одинаковое сообщение студентам, которые успешно справились с экзаменом. Создай функцию <code>getMessagesForBestStudents</code>, которая будет генерировать массив этих самых сообщений для студентов, которые сдали экзамен</p>
// <h4>Основные требования:</h4>
// <li>Создана функция <code>getMessagesForBestStudents</code></li>
// <li>Функция принимает два аргумента - массивы. Первый аргумент - массив имен всей группы, второй аргумент - массив имен студентов, которые НЕ сдали экзамен (оба массива содержат строки - имена в качестве элементов)</li>
// <li>Функция выбирает имена студентов, которые успешно сдали экзамен, и возращает массив сообщений для них в формате <b>'Good job, Ann'</b>. Где <b>Ann</b> - это имя студента, которые сдал экзамен</li>
// <li>Входящие массивы не меняются</li>
// <li>Для решения задачи используется только подходящие метод массивов, циклы не используются</li>

/**
 * @param {string[]} allStudentsList
 * @param {string[]} studentsForRetake
 * @return {string[]}
 */
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((name) => "Good job, " + name);

// examples
const allStudTest1 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest1 = ["John", "Mike"];
getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest2 = ["Den", "John", "Ann", "Mike"];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []
