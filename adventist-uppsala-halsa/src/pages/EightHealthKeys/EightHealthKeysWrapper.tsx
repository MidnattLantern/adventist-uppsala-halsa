import Styles from "./EightHealthKeysWrapper.module.css";
import LargeHealthKeyCard from "./components/HealthKeyCard/LargeHealthKeyCard";
import PhoneHealthKeyCard from "./components/HealthKeyCard/PhoneHealthKeyCard";
import HealthList from "./components/HealthList/HealthList";
import { useViewPortContext } from "../../contexts/useViewportContext";
import { useState } from "react";
import waterContent from "../../content/healthKeys/water.json";
import temperanceContent from "../../content/healthKeys/temperance.json";

const EightHealthKeysWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const VIEWPORT_BREAKPOINT = 768;
    const [waterExpanded, setWaterExpanded] = useState<boolean>(false); // "Vatten"
    const [temperanceExpanded, setTemperanceExpanded] = useState<boolean>(false); // "Avhållsamhet"

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

        </div>
    )
};

export default EightHealthKeysWrapper;