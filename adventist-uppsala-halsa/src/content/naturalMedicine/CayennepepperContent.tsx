import Styles from "./NaturalMedicine.module.css";

type cayennepepperContentType = {
    Effects: React.FC;
    Treatment: React.FC;
};

const Effects = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Effektivt mot halsont."}</p>
    </>)
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Ej het och kryddig. Sniffa lite i vardera näsborre mot nästäppa och bihåleinflammation. ¼ tesked sväljs med vatten."}</p>
    </>)
};

const CayennepepperContent: cayennepepperContentType = {
    Effects,
    Treatment
};

CayennepepperContent.Effects = Effects;
CayennepepperContent.Treatment = Treatment;

export default CayennepepperContent;