import { getCurrentTime, getRandomTodo, blurImage } from "./main.ts";

console.log(await getCurrentTime());

console.log(await getRandomTodo());


const imageResp = await blurImage('');
console.log(imageResp);

