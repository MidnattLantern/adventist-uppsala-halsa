// original title: NATURLIGA BEHANDLINGAR MOT FÖRKYLNING OCH INFLUENSA
import CarobContent from "../../content/naturalMedicine/CarobContent";
import CayennepepperContent from "../../content/naturalMedicine/CayennepepperContent";
import ChagaContent from "../../content/naturalMedicine/ChagaContent";
import ChicoryrootContent from "../../content/naturalMedicine/ChicoryrootContent";
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
import NavigationTable from "./components/NavigationTable/NavigationTable";
import Styles from "./NaturalMedicineWrapper.module.css";

const NaturalMedicineWrapper = () => {

    return(
        <div className={Styles.NaturalMedicineWrapperView}>
            <Introduction/>
            <NavigationTable/>
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
            <hr className={Styles.ThirdsBreaker}/>
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
            <hr className={Styles.ThirdsBreaker}/>
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
            <hr className={Styles.ThirdsBreaker}/>
            <NaturalMedicineCard
                title={"Cikoriarot"}
                idName="chicoryroot"
                effectsContent={<ChicoryrootContent.Effects/>}
                recipeContent={null}
                treatmentContent={null}
            />
            <NaturalMedicineCard
                title={"Carob"}
                idName="carob"
                effectsContent={<CarobContent.Effects/>}
                recipeContent={null}
                treatmentContent={null}
            />
            <NaturalMedicineCard
                title={"Chaga Sprängticka"}
                idName="chaga"
                effectsContent={<ChagaContent.Effects/>}
                recipeContent={null}
                treatmentContent={null}
            />
            <NavigationTable/>
        </div>
    )
};

export default NaturalMedicineWrapper;