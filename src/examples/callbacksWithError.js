import { logMessage, logError } from "./utils";

const iWillTryToCallYouIn2Seconds = callback => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      return callback(new Error("sorry mate, I could not call you"), null);
    } else {
      callback(null, "hello");
    }
  }, 2000);
};

// elsewhere.js
iWillTryToCallYouIn2Seconds((error, message) => {
  if (error) {
    logError(error);
    return;
  }
  logMessage(message);
});

// ... "hello" OR error: "sorry mate, I could not call you"
