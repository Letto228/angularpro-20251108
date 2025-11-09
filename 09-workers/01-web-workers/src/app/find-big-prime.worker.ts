/// <reference lib="webworker" />

import { findBigPrime } from "./find-big-prime";

addEventListener('message', () => {
  postMessage(findBigPrime());
});
