import Styles from "./NaturalMedicine.module.css";

type WatertherapyContentType = {
    Treatment: React.FC;
}

const Treatment = () => {
    return (<>
        <p className={Styles.AlternativeParagraph}>{"Drick rikligt med vatten, 2-3 liter på en dag. Gärna ett par korn Celtic mineralsalt före varje glas."}</p>
        <p className={Styles.AlternativeParagraph}>{"Kontrastdusch:"}</p>
        <li className={Styles.AlternativeListItem}>{"3 minuter varmt,"}</li>
        <li className={Styles.AlternativeListItem}>{"30 sekunder kallt,"}</li>
        <li className={Styles.AlternativeListItem}>{"upprepa 3 gånger per dag,"}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Om hög feber kan du sänka temperaturen genom ett svalt bad/dusch."}</li>
        <p className={Styles.AlternativeParagraph}>{"Kallt omslag runt halsen."}</p>
        <p className={Styles.AlternativeParagraph}>{"Inandning av vattenånga:"}</p>
        <li className={Styles.AlternativeListItem}>{"3 minuter,"}</li>
        <li className={Styles.AlternativeListItem}>{"bada med kallt vatten i 30 sekunder,"}</li>
        <li className={Styles.AlternativeListItem}>{"upprepa tre gånger."}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Effektivt mot nästäppa och bihåleinflammation. Du kan använda någon droppe av eterisk olja, tex eucalyptus, timjan eller rosmarin i vattenångan."}</li>
        <p className={Styles.AlternativeParagraph}>{"Gurgla med saltlösning eller starkt salviate."}</p>
        <p className={Styles.AlternativeParagraph}>{"Varmt fotbad."}</p>  
    </>)
};

const WatertherapyContent: WatertherapyContentType = {
    Treatment
};

WatertherapyContent.Treatment = Treatment;

export default WatertherapyContent;