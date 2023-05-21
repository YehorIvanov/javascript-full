/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  return arr.slice().reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  if (balances[clients.indexOf(client)] >= amount) {
    return (balances[clients.indexOf(client)] -= amount);
  }
  return -1;
};

export const getAdults = (obj) => {
  const resultingObj = {};
  // eslint-disable-next-line no-restricted-syntax, prefer-const
  for (let key in obj) {
    if (obj[key] >= 18) {
      resultingObj[key] = obj[key];
    }
  }
  return resultingObj;
};
