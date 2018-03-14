export const iPromiseIWillCallYou = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello"), 2000);
  });
};

// elsewhere.js

iPromiseIWillCallYou().then(logMessage);

// ... "hello"
