import Styles from "./AbuseContent.module.css";

type AbuseContentType = {
    Sugar: React.FC;
    Caffeine: React.FC;
    Nicotine: React.FC;
    Alcohol: React.FC;
    PhoneAddiction: React.FC;
    Food: React.FC;
}

const Sugar = () => {
    return(<>
        <div className={Styles.SectionView}>
            <li className={Styles.ListItem}>{"Kan orsaka för låg eller för hög blodsockerhalt,"}</li>
            <li className={Styles.ListItem}>{"Hämmar immunförsvaret,"}</li>
            <li className={Styles.ListItem}>{"Är inflammationsframkallande, och ökar risken för cancer,"}</li>
            <li className={Styles.ListItem}>{"Kan orsaka depression,"}</li>
            <li className={Styles.ListItem}>{"Kan orsaka svampinfektion (candidas),"}</li>
            <li className={Styles.ListItem}>{"Kan bidra till benskörhet,"}</li>
            <li className={Styles.ListItem}>{"Höjer blodfetter och LDL-kolesterol i blodet,"}</li>
            <li className={Styles.ListItem}>{"Orsakar näringsbrist,"}</li>
            <li className={Styles.ListItem}>{"Ger upphov till hyperaktivitet, oro, koncentrationssvårigheter och retligt humör hos barn,"}</li>
            <li className={Styles.ListItem}>{"Bidrar till åderförkalkning och hjärt-kärlbesvär,"}</li>
            <li className={Styles.ListItem}>{"Kan ge huvudvärk, migrän mm."}</li>
        </div>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}><strong>{"SOCKERKONSUMTIONEN I SVERIGE"}</strong></p>
            <p className={Styles.Paragraph}>{"I genomsnitt 40 kg /person varje år, samt lika mycket modifierad stärkelse, som stärkelsesirap, är ännu skadligare än socker."}</p>
            <p className={Styles.Paragraph}>{"88 liter läsk/person varje år. Svensk Fanta innehåller nästan dubbelt så mycket socker (18 bitar/500 ml) än övriga EU- länder."}</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://krafthalsa.se">{"krafthalsa.se"}</a>
        </div>
    </>)
};
const Caffeine = () => {
    return(<>
        <div className={Styles.SectionView}>
            <li className={Styles.ListItem}>{"Dränerar kroppen på mineraler och andra näringsämnen,"}</li>
            <li className={Styles.ListItem}>{"Ökar nervositet, oro,"}</li>
            <li className={Styles.ListItem}>{"Ger huvudvärk, sömnlöshet,"}</li>
            <li className={Styles.ListItem}>{"Producerar stresshormoner,"}</li>
            <li className={Styles.ListItem}>{"Höjer blodtrycket,"}</li>
            <li className={Styles.ListItem}>{"Påverkar blodsockret,"}</li>
            <li className={Styles.ListItem}>{"Kan ge magproblem, försvagar saltsyraproduktionen, ger halsbränna,"}</li>
            <li className={Styles.ListItem}>{"Hjärtklappning, irritation, ångest. Hallucinationer förekommer också."}</li>
        </div>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"1 kopp kaffe minskar syre till hjärnan med 40% under flera timmar, vilket ger hjärndimma."}</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="http://www.naturalwellness.se">{"naturalwellness.se"}</a>
            <p className={Styles.Paragraph}>{"Koffein gör människan mer impulsiv, och minskar självkontrollen."}</p>
            <p className={Styles.Paragraph}>{"1 kopp kaffe leder till 50% mer shopping och on-line."}</p>
        </div>
    </>)
};
const Nicotine = () => {
    return(<>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Stark påverkan på hjärt-kärlsystemet."}</p>
            <p className={Styles.Paragraph}>{"Citron, honung, pepparmyntolja minskar suget."}</p>
            <p className={Styles.Paragraph}>{"Undvik stekt och kryddad mat."}</p>
        </div>
    </>)
};
const Alcohol = () => {
    return(<>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Hjärnan krymper redan efter 4 dagars supande."}</p>
            <p className={Styles.Paragraph}>{"10-30 minuters löprundor under en tvåveckorsperiod minskar suget efter droger med 50%"}</p>
        </div>
    </>)
};
const PhoneAddiction = () => {
    return(<>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>Ett enkelt mobilberoendetest är att stänga av mobilen, och se vad som händer.</p>
            <p className={Styles.Paragraph}>Hur mår du, hur reagerar du på att inte använda mobilen på en eller två dagar.</p>
            <p className={Styles.Paragraph}>Om du använder din mobil intensivt varje dag så kan vissa delar av din hjärna krympa.</p>
            <p className={Styles.Paragraph}>Det finns också risk för att stressnivåerna i din kropp kan öka på grund av din smartphone.</p>
            <p className={Styles.Paragraph}>Går det att bota mobilberoende?</p>
            <p className={Styles.Paragraph}>Läs mer: <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://axelsons.se/mobilberoende/">axelsons.se/mobilberoende</a></p>
        </div>
    </>)
};
const Food = () => {
    return(<>
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>Dopamin utsöndras när vi äter mat, så den härliga känslan kan motverka vårt välbefinnande. Dåliga kostvanor, övervikt och fetma påverkar oss väldigt negativt, och leder till livsstilssjukdomar.  </p>
            <p className={Styles.Paragraph}>För mycket socker och mättade fettsyror kan minska dopaminproduktionen.</p>
        </div>
    </>)
};

const AbuseContent: AbuseContentType = {
    Sugar,
    Caffeine,
    Nicotine,
    Alcohol,
    PhoneAddiction,
    Food
}

AbuseContent.Sugar = Sugar;
AbuseContent.Caffeine = Caffeine;
AbuseContent.Nicotine = Nicotine;
AbuseContent.Alcohol = Alcohol;
AbuseContent.PhoneAddiction = PhoneAddiction;
AbuseContent.Food = Food;

export default AbuseContent;