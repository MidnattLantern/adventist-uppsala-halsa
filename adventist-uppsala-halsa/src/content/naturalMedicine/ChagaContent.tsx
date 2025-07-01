import Styles from "./NaturalMedicine.module.css";

type ChagaContentType = {
  Effects: React.FC;
};

const Effects = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Koka och drick som te, kaffe eller använd som bas i en smoothie."}</p>
        <p className={Styles.AlternativeParagraph}>{"Chaga:"}</p>
        <li className={Styles.AlternativeListItem}>{"Är en av de mest värdefulla råvarorna i naturen,"}</li>
        <li className={Styles.AlternativeListItem}>{"Innehåller många vitaminer och mineraler,  betagluken, steroler och fytonäringsämnen,"}</li>
        <li className={Styles.AlternativeListItem}>{"Innehåller antioxidanter reducerar fria radikaler i kroppen, och just chaga har mest antioxidanter av alla växter. Den har ett ORAC-värde på 100 000 jämfört med blåbårets ORAC-värde på 9000. (ORAC-värdet anger födans förmåga att neutralisera de skadliga fria radikalerna),"}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Är effektiv mot psoriasis och cancer,"}</li>
        <li className={Styles.AlternativeListItem}>{"Stärker immunförsvaret,"}</li>
        <li className={Styles.AlternativeListItem}>{"Lindrar infektioner och inflammationer,"}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Är effektiv mot virussjukdom,"}</li>
        <li className={Styles.AlternativeListItem}>{"Balanserar blodtrycket,"}</li>
        <li className={Styles.AlternativeListItem}>{"Sänker blodsockernivån,"}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Förbättrar kvaliteten på hår och hud,"}</li>
        <li className={Styles.AlternativeListItem}>{"Lindrar matsmältningsproblem,"}</li>
        <li className={Styles.AlternativeListItem}>{"Kan användas vid detox och fasta."}</li>
    </>)
};

const ChagaContent: ChagaContentType = {
  Effects
};

ChagaContent.Effects = Effects;

export default ChagaContent;