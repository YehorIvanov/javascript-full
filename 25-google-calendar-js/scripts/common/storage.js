export let storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,
  // хранит массив всех событий
  events: [
    {
      id: 0.7520027086457333, // id понадобится для работы с событиями
      title: "Title",
      description: "Some description",
      start: new Date("2023-07-05T01:10:00.000Z"),
      end: new Date("2023-07-05T04:30:00.000Z"),
    },
    {
      id: 0.7520027086457353, // id понадобится для работы с событиями
      title: "Title",
      description: "Some description",
      start: new Date("2023-07-06T04:10:00.000Z"),
      end: new Date("2023-07-06T06:30:00.000Z"),
    },
  ],

  // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  // localStorage.setItem(key, value);
  storage[key] = value;
};

export const getItem = (key) => {
  // return localStorage.getItem(key);
  return storage[key];
};

// пример объекта события
const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: "Title",
  description: "Some description",
  start: new Date("2020-03-17T01:10:00.000Z"),
  end: new Date("2020-03-17T04:30:00.000Z"),
};
