import { printProgress } from "@luca/flag";
import { lib_getCurrentTime } from "./utils/time.ts";

export async function getCurrentTime() {
  printProgress();
  return await lib_getCurrentTime();
}