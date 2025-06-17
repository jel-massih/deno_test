import { printProgress } from "@luca/flag";
export async function getCurrentTime() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const data = await response.json();
    printProgress();
    return data.datetime;
  } catch (error) {
    console.error('Error fetching time:', error);
    throw error;
  }
}