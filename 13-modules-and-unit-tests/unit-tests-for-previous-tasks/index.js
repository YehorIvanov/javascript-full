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

const createLogger = () => {
  const logMassageArray = [];
  const warn = (message) => {
    logMassageArray.push({
      message,
      dateTime: new Date(),
      type: "warn",
    });
  };
  const error = (message) => {
    logMassageArray.push({
      message,
      dateTime: new Date(),
      type: "error",
    });
  };
  const log = (message) => {
    logMassageArray.push({
      message,
      dateTime: new Date(),
      type: "log",
    });
  };
  const getRecords = (type) => {
    if (type !== undefined)
      return logMassageArray
        .filter((elem) => elem.type === type)
        .sort((a, b) => b.dateTime - a.dateTime);
    return logMassageArray.sort((a, b) => b.dateTime - a.dateTime);
  };
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// put your code here
export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.secondsPassed < 60) {
        this.secondsPassed += 1;
      } else {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    function getSeconds(secondsPassed) {
      if (secondsPassed < 10) {
        return secondsPassed;
      }
      return `0${secondsPassed}`;
    }
    return `${this.minsPassed}:${getSeconds(this.secondsPassed)}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
