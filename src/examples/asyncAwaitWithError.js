import { logMessage, logError } from "./utils";
import { iPromiseIWillTryCallYou } from "./promisesWithError";

async function run() {
  try {
    const message = await iPromiseIWillTryCallYou();
    logMessage(message);
  } catch (e) {
    logError(e);
  }
}

// elsewhere.js
run();

// ... "hello" OR error: "sorry mate, I could not call you"
