import Styles from "./AbuseContent.module.css";

type ReplacementContentType = {
    ChicoryrootContent: React.FC;
    ChagaContent: React.FC;
    CarobContent: React.FC;
};

const ChicoryrootContent = () => {
    return(<>
        <p className={Styles.Paragraph}>{"En god och nyttig kaffeersättning."}</p>
        <p className={Styles.Paragraph}>{"Rik på vitaminer, mineraler, fibrer och antioxidanter."}</p>
        <p className={Styles.Paragraph}>{"Minskar risken för hjärt-kärlsjukdomar, har en blodtryckssänkande effekt."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Kostfibrer stödjer matsmältningen, kan förhindra förstoppning och även tjocktarmscancer."}</p>
        <p className={Styles.Paragraph}>{"Håller blodsockret stabilt och stödjer hälsosam viktminskning."}</p>
        <p className={Styles.Paragraph}>{"Renar kroppen - rensar levern och blodet."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Hjälper kroppen att motstå gallstenar, njurstenar och leverstenar."}</p>
        <p className={Styles.Paragraph}>{"Inulin - en löslig fiber som har antiinflammatoriska egenskaper som är bra för både immun- och nervsystemet. Minskar ångest och depression."}</p>
        <p className={Styles.Paragraph}>{"Cikoria - är utmärkt för att bekämpa parasiter och maskar i tarmen."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Antioxidanter hjälper oss att bekämpa oxidativ stress i kroppen."}</p>
    </>)
};

const CarobContent = () => {
    return(<>
        <p className={Styles.Paragraph}>{"Koka och drick som te, kaffe eller använd som bas i en smoothie."}</p>
        <p className={Styles.Paragraph}>{"Chaga:"}</p>
        <li className={Styles.ListItem}>{"Är en av de mest värdefulla råvarorna i naturen,"}</li>
        <li className={Styles.ListItem}>{"Innehåller många vitaminer och mineraler,  betagluken, steroler och fytonäringsämnen,"}</li>
        <li className={Styles.ListItem}>{"Innehåller antioxidanter reducerar fria radikaler i kroppen, och just chaga har mest antioxidanter av alla växter. Den har ett ORAC-värde på 100 000 jämfört med blåbårets ORAC-värde på 9000. (ORAC-värdet anger födans förmåga att neutralisera de skadliga fria radikalerna),"}</li>
        <br/>
        <li className={Styles.ListItem}>{"Är effektiv mot psoriasis och cancer,"}</li>
        <li className={Styles.ListItem}>{"Stärker immunförsvaret,"}</li>
        <li className={Styles.ListItem}>{"Lindrar infektioner och inflammationer,"}</li>
        <br/>
        <li className={Styles.ListItem}>{"Är effektiv mot virussjukdom,"}</li>
        <li className={Styles.ListItem}>{"Balanserar blodtrycket,"}</li>
        <li className={Styles.ListItem}>{"Sänker blodsockernivån,"}</li>
        <br/>
        <li className={Styles.ListItem}>{"Förbättrar kvaliteten på hår och hud,"}</li>
        <li className={Styles.ListItem}>{"Lindrar matsmältningsproblem,"}</li>
        
    </>)
};

const ChagaContent = () => {
    return(<>
        <p className={Styles.Paragraph}>{"Kakaoersättning, fritt från koffein."}</p>
        <p className={Styles.Paragraph}>{"Bra källa till vitaminer och mineraler."}</p>
        <p className={Styles.Paragraph}>{"Minskar risken för hjärt- och kärlsjukdomar."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Balanserar blodtrycket."}</p>
        <p className={Styles.Paragraph}>{"Sänker kolesterolbeläggning."}</p>
        <p className={Styles.Paragraph}>{"Minskar sötsuget."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Stödjer matsmältningen."}</p>
        <p className={Styles.Paragraph}>{"Har en snabbt stoppande effekt vid diarre."}</p>
        <p className={Styles.Paragraph}>{"Reglerar blodsockernivån."}</p>
        <br/>
        <p className={Styles.Paragraph}>{"Vitamin A och B2 är bra för din hud och ögonhälsa."}</p>
    </>)
};

const ReplacementContent: ReplacementContentType = {
    ChicoryrootContent,
    ChagaContent,
    CarobContent,
};

ReplacementContent.ChicoryrootContent = ChicoryrootContent;
ReplacementContent.ChagaContent = ChagaContent;
ReplacementContent.CarobContent = CarobContent;

export default ReplacementContent;