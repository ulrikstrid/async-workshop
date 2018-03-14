import { logMessage, logError } from "./utils";
import { timer } from "rxjs/observable/timer";
import { map } from "rxjs/operators";

const timeout$ = timer(1000).pipe(
  map(() => {
    if (Math.random() > 0.5) {
      throw new Error("sorry mate, I could not call you");
    } else {
      return "hello";
    }
  })
);

// elsewhere.js
timeout$.subscribe(logMessage, logError, () => logMessage("done"));

// ... "hello" OR error: "sorry mate, I could not call you"
