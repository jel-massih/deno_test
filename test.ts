import { getCurrentTime, getRandomTodo, resizeImage } from "./main.ts";

console.log(await getCurrentTime());

console.log(await getRandomTodo());

console.log(await resizeImage("https://user-uploads.cdn.overworld.xyz/qu5ulfkpjrqdkjyu6hqww42w.png"));