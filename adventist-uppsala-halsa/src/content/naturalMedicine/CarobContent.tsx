import Styles from "./NaturalMedicine.module.css";

type CarobContentType = {
  Effects: React.FC;
};

const Effects = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Kakaoersättning, fritt från koffein."}</p>
        <p className={Styles.AlternativeParagraph}>{"Bra källa till vitaminer och mineraler."}</p>
        <p className={Styles.AlternativeParagraph}>{"Minskar risken för hjärt- och kärlsjukdomar."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Balanserar blodtrycket."}</p>
        <p className={Styles.AlternativeParagraph}>{"Sänker kolesterolbeläggning."}</p>
        <p className={Styles.AlternativeParagraph}>{"Minskar sötsuget."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Stödjer matsmältningen."}</p>
        <p className={Styles.AlternativeParagraph}>{"Har en snabbt stoppande effekt vid diarre."}</p>
        <p className={Styles.AlternativeParagraph}>{"Reglerar blodsockernivån."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Vitamin A och B2 är bra för din hud och ögonhälsa."}</p>
    </>)
};

const CarobContent: CarobContentType = {
  Effects
};

CarobContent.Effects = Effects;

export default CarobContent;