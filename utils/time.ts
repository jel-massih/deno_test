export async function lib_getCurrentTime() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/ip');
    const data = await response.json();
    return data.datetime;
  } catch (error) {
    console.error('Error fetching time:', error);
    throw error;
  }
}