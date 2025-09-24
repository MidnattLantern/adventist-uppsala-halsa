// original title: NATURLIGA BEHANDLINGAR MOT FÖRKYLNING OCH INFLUENSA
import Masonry from "react-masonry-css";
import CayennepepperContent from "../../content/naturalMedicine/CayennepepperContent";
import CoughContent from "../../content/naturalMedicine/CoughContent";
import CoughmedicineContent from "../../content/naturalMedicine/CoughMedicineContent";
import FlubombContent from "../../content/naturalMedicine/FlubombContent";
import GingerShotContent from "../../content/naturalMedicine/GingerShotContent";
import MeadowsweetContent from "../../content/naturalMedicine/MeadowsweetContent";
import OtitisContent from "../../content/naturalMedicine/OtitisContent";
import SoreThroatContent from "../../content/naturalMedicine/SoreThroatContent";
import WatertherapyContent from "../../content/naturalMedicine/WatertherapyContent";
import Introduction from "./components/Introduction/Intrroduction";
import NaturalMedicineCard from "./components/NaturalMedicineCard/NaturalMedicineCard";
//import NavigationTable from "./components/NavigationTable/NavigationTable";
import Styles from "./NaturalMedicineWrapper.module.css";
import MasonryStyles from "./Masonry.module.css";
import { useViewPortContext } from "../../contexts/useViewportContext";

const NaturalMedicineWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const BREAKPOINT_DESKTOP = 1280;

    return(
        <div className={Styles.NaturalMedicineWrapperView}>
            <Introduction/>

            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1 //BREAKPOINT_DESKTOP
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >

                <NaturalMedicineCard
                    title={"älgörtste"}
                    idName="meadowsweet"
                    effectsContent={<MeadowsweetContent.Effects/>}
                    recipeContent={<MeadowsweetContent.Recipe/>}
                    treatmentContent={<MeadowsweetContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Influensabomben"}
                    idName="flubomb"
                    effectsContent={null}
                    recipeContent={<FlubombContent.Recipe/>}
                    treatmentContent={<FlubombContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Vattenterapi"}
                    idName="watertherapy"
                    effectsContent={null}
                    recipeContent={null}
                    treatmentContent={<WatertherapyContent.Treatment/>}
                />
                {viewportWidth < BREAKPOINT_DESKTOP && <hr className={Styles.ThirdsBreaker}/>}
                <NaturalMedicineCard
                    title={"Cayennepeppar"}
                    idName="cayennepepper"
                    effectsContent={<CayennepepperContent.Effects/>}
                    recipeContent={null}
                    treatmentContent={<CayennepepperContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Hostmedicin"}
                    idName="coughmedicine"
                    effectsContent={null}
                    recipeContent={<CoughmedicineContent.Recipe/>}
                    treatmentContent={<CoughmedicineContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Öroninflammation"}
                    idName="otitis"
                    effectsContent={null}
                    recipeContent={<OtitisContent.Recipe/>}
                    treatmentContent={<OtitisContent.Treatment/>}
                />
                {viewportWidth < BREAKPOINT_DESKTOP && <hr className={Styles.ThirdsBreaker}/>}
                <NaturalMedicineCard
                    title={"Hosta"}
                    idName="cough"
                    effectsContent={null}
                    recipeContent={<CoughContent.Recipe/>}
                    treatmentContent={<CoughContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Halsont"}
                    idName="sore-throat"
                    effectsContent={null}
                    recipeContent={null}
                    treatmentContent={<SoreThroatContent.Treatment/>}
                />
                <NaturalMedicineCard
                    title={"Ingefära Shot"}
                    idName="ginger-shot"
                    effectsContent={null}
                    recipeContent={<GingerShotContent.Recipe/>}
                    treatmentContent={null}
                />

            </Masonry>

        </div>
    )
};

export default NaturalMedicineWrapper;