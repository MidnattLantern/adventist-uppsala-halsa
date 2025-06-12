import Styles from "./EightHealthKeysWrapper.module.css";
import LargeHealthKeyCard from "./components/HealthKeyCard/LargeHealthKeyCard";
import PhoneHealthKeyCard from "./components/HealthKeyCard/PhoneHealthKeyCard";
import HealthList from "./components/HealthList/HealthList";
import { useViewPortContext } from "../../contexts/useViewportContext";
import { useState } from "react";
import waterContent from "../../content/healthKeys/water.json";
import temperanceContent from "../../content/healthKeys/temperance.json";
import exersiceContent from "../../content/healthKeys/exersice.json";
import sunshineContent from "../../content/healthKeys/sunshine.json";
import restContent from "../../content/healthKeys/rest.json";
import trustInGodContent from "../../content/healthKeys/trust-in-god.json";
import airContent from "../../content/healthKeys/air.json";
import nutritionContent from "../../content/healthKeys/nutrition.json";

const EightHealthKeysWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const VIEWPORT_BREAKPOINT = 768;
    const [waterExpanded, setWaterExpanded] = useState<boolean>(false); // "Vatten"
    const [temperanceExpanded, setTemperanceExpanded] = useState<boolean>(false); // "Avhållsamhet"
    const [exersiceExpanded, setExersiceExpanded] = useState<boolean>(false); // "Rörelse"
    const [sunshineExpanded, setSunshineExpanded] = useState<boolean>(false); // "Solsken"
    const [restExpanded, setRestExpanded] = useState<boolean>(false); // "Återhämtning"
    const [trustInGodExpanded, setTrustInGodExpanded] = useState<boolean>(false); // "Gudsförtröstan"
    const [airExpanded, setAirExpanded] = useState<boolean>(false); // "O2 syre"
    const [nutritionExpanded, setNutritionExpanded] = useState<boolean>(false); // "Diet"

    return (
        <div className={Styles.EightHealthKeysWrapperComponent}>
            <HealthList />

            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={waterContent}
                    isExpanded={waterExpanded}
                    setIsExpanded={setWaterExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={waterContent}
                    isExpanded={waterExpanded}
                    setIsExpanded={setWaterExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={temperanceContent}
                    isExpanded={temperanceExpanded}
                    setIsExpanded={setTemperanceExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={temperanceContent}
                    isExpanded={temperanceExpanded}
                    setIsExpanded={setTemperanceExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={exersiceContent}
                    isExpanded={exersiceExpanded}
                    setIsExpanded={setExersiceExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={exersiceContent}
                    isExpanded={exersiceExpanded}
                    setIsExpanded={setExersiceExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={sunshineContent}
                    isExpanded={sunshineExpanded}
                    setIsExpanded={setSunshineExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={sunshineContent}
                    isExpanded={sunshineExpanded}
                    setIsExpanded={setSunshineExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={restContent}
                    isExpanded={restExpanded}
                    setIsExpanded={setRestExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={restContent}
                    isExpanded={restExpanded}
                    setIsExpanded={setRestExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={trustInGodContent}
                    isExpanded={trustInGodExpanded}
                    setIsExpanded={setTrustInGodExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={trustInGodContent}
                    isExpanded={trustInGodExpanded}
                    setIsExpanded={setTrustInGodExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={airContent}
                    isExpanded={airExpanded}
                    setIsExpanded={setAirExpanded}
                />
                :
                <LargeHealthKeyCard
                    customTitle={<h1>0<sub>2</sub> syre</h1>}
                    contentData={airContent}
                    isExpanded={airExpanded}
                    setIsExpanded={setAirExpanded}
                />
            }
            {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneHealthKeyCard
                    contentData={nutritionContent}
                    isExpanded={nutritionExpanded}
                    setIsExpanded={setNutritionExpanded}
                />
                :
                <LargeHealthKeyCard
                    contentData={nutritionContent}
                    isExpanded={nutritionExpanded}
                    setIsExpanded={setNutritionExpanded}
                />
            }

        </div>
    )
};

export default EightHealthKeysWrapper;