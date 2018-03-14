import { logMessage, logError } from "./utils";
import { iPromiseIWillCallYou } from "./promises";

async function run() {
  const message = await iPromiseIWillCallYou();
  logMessage(message);
}

// elsewhere.js
run();

// ... "hello"
