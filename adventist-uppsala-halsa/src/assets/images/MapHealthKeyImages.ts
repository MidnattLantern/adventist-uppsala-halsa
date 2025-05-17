// Script that automatically locates images based by the id name, since .json files cannot store images
import WaterImage from "./unsplash-nicolas-ruiz-water.jpg";

// each record name MUST match the id from .json files
export const MapHealthKeyImages: Record<string, string[]> = {
    "water" : [WaterImage]
};