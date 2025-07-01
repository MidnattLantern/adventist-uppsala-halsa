import Styles from "./NaturalMedicine.module.css";

type CoughContentType = {
    Recipe: React.FC;
    Treatment: React.FC;
};

const Recipe = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Varva lökringar och honung i en burk,"}</p>
        <p className={Styles.AlternativeParagraph}>{"låt stå i rumstemperatur 24 timmar,"}</p>
        <p className={Styles.AlternativeParagraph}>{"sila bort lökringarna."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Förvaras i kylskåp 1 månad."}</p>
    </>)
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Skivad gullök bredvid sängen under natten."}</p>
        <p className={Styles.AlternativeParagraph}>{"Skivad gullök under fötterna i plastpåse eller strumpa."}</p>
        <p className={Styles.AlternativeParagraph}>{"Spädbarn: Skivad vitlök istället för gullök, men ej direkt på huden - Linda in i en kompress eller bomullstyg (Alt. En droppe eucalyptusolja på fontanellen)."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Varmt fotbad med lök 20-30 minuter. "}<strong>{"Om du har neuropati, diabetes eller sår: max 37,8 grader i vattnet."}</strong></p>
    </>)
};

const CoughContent: CoughContentType = {
    Recipe,
    Treatment
};

CoughContent.Recipe = Recipe;
CoughContent.Treatment = Treatment;

export default CoughContent;