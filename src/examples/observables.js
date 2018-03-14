import { timer } from "rxjs/observable/timer";
import { logMessage, logError } from "./utils";
import { map } from "rxjs/operators";

const timeout$ = timer(1000).pipe(map(() => "hello"));

// elsewhere.js
timeout$.subscribe(logMessage, logError, () => logMessage("done"));

// ... "hello"
