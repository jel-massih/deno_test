export const VERSION = '1.0.0';

import { lib_getCurrentTime } from "./utils/time.ts";
import { getTestTodo } from "./todos.ts";

import {
    ImageMagick,
    IMagickImage,
    initialize,
    MagickFormat,
    MagickGeometry,
  } from "https://deno.land/x/imagemagick_deno@0.0.31/mod.ts";
  import { getRemoteImage } from "./image.ts";


export async function getCurrentTime() {
  return lib_getCurrentTime();
}

export async function getRandomTodo() {
  return getTestTodo();
}

export async function sum(...args: number[]) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

export function multiply(...args: number[]) {
    return args.reduce((acc, curr) => acc * curr, 1);
}

export async function blurImage(imageUrl: string) {
    imageUrl = imageUrl || 'https://placehold.co/600x400.jpg?text=Hello+World'
    await initialize();
    const image = await getRemoteImage(imageUrl);
    if(!image) {
        throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    if(typeof image === "string") {
        throw new Error(`Failed to fetch image: ${imageUrl}`);
    }
    const resizedImage = new Promise<Uint8Array>((resolve) => {
        ImageMagick.read(image.buffer, async (img: IMagickImage) => {
        const width = img.width;
        const height = img.height;
        
        // Calculate blur radius based on image size
        // Larger images get more blur, smaller images get less blur
        const blurRadius = Math.max(1, Math.min(20, Math.floor((width + height) / 200)));
        
        img.blur(0, blurRadius);
      
        await img.write(
          MagickFormat.Jpeg,
          (data: Uint8Array) => resolve(data),
        );
      });
    });

    //Return base64 of the resized image
    const base64 = btoa(String.fromCharCode(...await resizedImage));
    return `data:${image.mediaType};base64,${base64}`;

}