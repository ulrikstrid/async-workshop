import { logMessage, logError } from "./utils";

export const iPromiseIWillTryCallYou = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return reject(new Error("sorry mate, I could not call you"));
      } else {
        resolve("hello");
      }
    }, 2000);
  });
};

// elsewhere.js
iPromiseIWillTryCallYou()
  .then(logMessage)
  .catch(logError);

// ... "hello" OR error: "sorry mate, I could not call you"
