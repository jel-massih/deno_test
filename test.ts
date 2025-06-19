import { getCurrentTime, getRandomTodo, blurImage } from "./main.ts";

console.log(await getCurrentTime());

console.log(await getRandomTodo());


const imageResp = await blurImage("https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msKSl");
Deno.writeFile("image-blur.jpg", imageResp as any);






