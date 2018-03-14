import { logMessage, logError } from "./utils";

const iWillCallYouIn2Seconds = callback => {
  setTimeout(() => callback("hello"), 2000);
};

// elsewhere.js
iWillCallYouIn2Seconds(logMessage);

// ... "hello"
