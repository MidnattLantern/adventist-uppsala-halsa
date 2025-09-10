// This components has been moved to the `content > abuse` directory
import Styles from "./NaturalMedicine.module.css";

type ChicoryrootContentType = {
  Effects: React.FC;
};

const Effects = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"En god och nyttig kaffeersättning."}</p>
        <p className={Styles.AlternativeParagraph}>{"Rik på vitaminer, mineraler, fibrer och antioxidanter."}</p>
        <p className={Styles.AlternativeParagraph}>{"Minskar risken för hjärt-kärlsjukdomar, har en blodtryckssänkande effekt."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Kostfibrer stödjer matsmältningen, kan förhindra förstoppning och även tjocktarmscancer."}</p>
        <p className={Styles.AlternativeParagraph}>{"Håller blodsockret stabilt och stödjer hälsosam viktminskning."}</p>
        <p className={Styles.AlternativeParagraph}>{"Renar kroppen - rensar levern och blodet."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Hjälper kroppen att motstå gallstenar, njurstenar och leverstenar."}</p>
        <p className={Styles.AlternativeParagraph}>{"Inulin - en löslig fiber som har antiinflammatoriska egenskaper som är bra för både immun- och nervsystemet. Minskar ångest och depression."}</p>
        <p className={Styles.AlternativeParagraph}>{"Cikoria - är utmärkt för att bekämpa parasiter och maskar i tarmen."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Antioxidanter hjälper oss att bekämpa oxidativ stress i kroppen."}</p>
    </>)
};

const ChicoryrootContent: ChicoryrootContentType = {
  Effects
};

ChicoryrootContent.Effects = Effects;

export default ChicoryrootContent;