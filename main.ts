import { lib_getCurrentTime } from "./utils/time.ts";
import { getTestTodo } from "./todos.ts";

import {
    ImageMagick,
    initialize,
    MagickGeometry,
  } from "https://deno.land/x/imagemagick_deno@0.0.31/mod.ts";
  import { getRemoteImage } from "./image.ts";


export async function getCurrentTime() {
  return lib_getCurrentTime();
}

export async function getRandomTodo() {
  return getTestTodo();
}

export async function resizeImage(imageUrl: string) {
    imageUrl = imageUrl || 'https://placehold.co/600x400?text=Hello+World'
    await initialize();
    const image = await getRemoteImage(imageUrl);
    if(!image) {
        throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    if(typeof image === "string") {
        throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    const resizedImage = await new Promise((resolve) => {
        ImageMagick.read(image.buffer, (image) => {
            image.resize(new MagickGeometry(100, 100));
            image.write(data => resolve(data));
        });
    });

    return new Response(resizedImage as any, {
        headers: {
            "Content-Type": image.mediaType,
        },
    });
}