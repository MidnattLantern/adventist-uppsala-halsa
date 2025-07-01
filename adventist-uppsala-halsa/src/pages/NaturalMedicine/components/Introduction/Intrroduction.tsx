import ZigZag from "../../../../components/ZigZag/ZigZag";
import Styles from "./Introduction.module.css";

const Introduction = () => {

    const Paragraph1 = () => {
        return <p className={Styles.Paragraph}>{"Påbörja behandling så tidigt som möjligt."}</p>
    };
    const Paragraph2 = () => {
        return <p className={Styles.Paragraph}>{"Influensabomben och ingefärashot kan även användas förebyggande."}</p>
    };
    const Paragraph3 = () => {
        return <p className={Styles.Paragraph}><a className={Styles.NavLink} href="#eight-health-keys">{"8 hälsonycklar"}</a>{" hjälper dig att bli fri från ohälsosamma vanor och beroenden."}</p>
    };
    const Paragraph4 = () => {
        return <p className={Styles.Paragraph}>{"Det tar 21 dagar att etablera en vana, och efter 60 dagar sitter det."}</p>
    };

    return(
        <div className={Styles.IntroductionView}>
            <h1 className={Styles.Title}>{"FÖRKYLNING & NATURLIG BEHANDLING"}</h1>
            <ZigZag contentData={[ Paragraph1, Paragraph2, Paragraph3, Paragraph4 ]}/>
        </div>
    )
};

export default Introduction;