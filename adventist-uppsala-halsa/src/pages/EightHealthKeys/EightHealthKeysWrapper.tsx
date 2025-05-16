// Work in progress - Alma
//import HealthList from "./components/HealthList";
import Styles from "./EightHealthKeysWrapper.module.css";
import LargeHealthKeyCard from "./components/HealthKeyCard/LargeHealthKeyCard";
import PhoneHealthKeyCard from "./components/HealthKeyCard/PhoneHealthKeyCard";
import { useViewPortContext } from "../../contexts/useViewportContext";
import HealthList from "./components/HealthList/HealthList";

const EightHealthKeysWrapper = () => {
        const { viewportWidth } = useViewPortContext();
        const VIEWPORT_BREAKPOINT = 768;

    return(
        <div className={Styles.EightHealthKeysWrapperComponent}>
            <HealthList />
            {viewportWidth < VIEWPORT_BREAKPOINT ?
            <PhoneHealthKeyCard />
            :
            <LargeHealthKeyCard />
            }
        </div>
    )
};

export default EightHealthKeysWrapper;