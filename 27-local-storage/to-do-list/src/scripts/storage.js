// export const tasks = [
//   { text: "Buy milk", done: false },
//   { text: "Pick up Tom from airport", done: false },
//   { text: "Visit party", done: false },
//   { text: "Visit doctor", done: true },
//   { text: "Buy meat", done: true },
// ];

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
