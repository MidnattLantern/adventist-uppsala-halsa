// Script that automatically locates images based by the id name, since .json files cannot store images
import SugarImage from "./unsplash-daniel-kraus-sugar.jpg";
import CaffeineImage from "./unsplash-anastasiia-chepinska-caffeine.jpg";
import NicotineImage from "./unsplash-irina-iriser-nicotine.jpg";
import AlcoholImage from "./unsplash-ambitious-studio-alcohol.jpg";
import PhoneAddiction from "./unsplash-nathan-dumlao-phone-addiction.jpg";
import Food from "./unsplash-ashley-green-food.jpg";

// each record name MUST match the id from .json files (use camelCase)
export const MapAbuseImages: Record<string, string[]> = {
    "sugar" : [SugarImage],
    "caffeine" : [CaffeineImage],
    "nicotine" : [NicotineImage],
    "alcohol" : [AlcoholImage],
    "phone-addiction" : [PhoneAddiction],
    "food" : [Food]
};