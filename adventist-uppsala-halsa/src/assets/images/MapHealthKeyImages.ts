// Script that automatically locates images based by the id name, since .json files cannot store images
import WaterImage from "./unsplash-nicolas-ruiz-water.jpg";
import TemperanceImage from "./unsplash-karolina-kolodziejczak.jpg";
import ExersiceImage from "./unsplash-martin-dalsgaard-exersice.jpg";
import SunshineImage from "./unsplash-melissa-askew-sunshine.jpg";
import RestImage from "./unsplash-shahovskaya-rest.jpg";
import TrustInGod from "./unsplash-ioana-ye-trust-in-god.jpg";
import AirImage from "./unsplash-mauri-karlin-air.jpg";
import NutritionImage from "./unsplash-victoria-shes-nutrition.jpg";

// each record name MUST match the id from .json files (use camelCase)
export const MapHealthKeyImages: Record<string, string[]> = {
    "water" : [WaterImage],
    "temperance" : [TemperanceImage],
    "exersice" : [ExersiceImage],
    "sunshine" : [SunshineImage],
    "rest" : [RestImage],
    "trustInGod" : [TrustInGod],
    "air" : [AirImage],
    "nutrition" : [NutritionImage]
};