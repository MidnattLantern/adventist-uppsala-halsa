import Styles from "./NaturalMedicine.module.css";

type SoreThroatContentType = {
  Treatment: React.FC;
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Applicera lökomslag kring halsen, eller på bröstet, om besvären sitter längre ner."}</p>
        <p className={Styles.AlternativeParagraph}>{"Använd kallt omslag kring halsen."}</p>
        <p className={Styles.AlternativeParagraph}>{"Applicera eucalyptusolja kring halsen."}</p>
    </>)
}

const SoreThroatContent: SoreThroatContentType = {
  Treatment
};

SoreThroatContent.Treatment = Treatment;

export default SoreThroatContent;