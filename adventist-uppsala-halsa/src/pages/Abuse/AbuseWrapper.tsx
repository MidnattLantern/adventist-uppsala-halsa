import Styles from "./AbuseWrapper.module.css";
import PhoneViewAddictionCard from "./components/AddictionCard/PhoneViewAddictionCard";
import Introduction from "./components/Introduction/Introduction";
import ContentData from "../../content/abuse/abuse-data.json"
import { useState } from "react";
import AbuseContent from "../../content/abuse/AbuseContent";

const AbuseWrapper = () => {
    const [sugarExpanded, setSugarExpanded] = useState<boolean>(false); // "Socker"
    const [caffeineExpanded, setCaffeineExpanded] = useState<boolean>(false); // "Koffein"
    const [nicotineExpanded, setNicotineExpanded] = useState<boolean>(false); // "Nikotin"
    const [alcoholExpanded, setAlcoholExpanded] = useState<boolean>(false); // "Alkohol"
    const [phoneAddictionExpanded, setPhoneAddictionExpanded] = useState<boolean>(false); // "Mobilberoende"
    const [foodExpanded, setFoodExpanded] = useState<boolean>(false); // "Food"

    return(
        <div className={Styles.AbuseWrapperView}>
            <Introduction/>
            <h1 className={Styles.Title}>{"VANLIGA BEROENDEN"}</h1>
            <PhoneViewAddictionCard contentData={ContentData["sugar"]} isExpanded={sugarExpanded} setIsExpanded={setSugarExpanded}>
                <AbuseContent.Sugar/>
            </PhoneViewAddictionCard>
            <PhoneViewAddictionCard contentData={ContentData["caffeine"]} isExpanded={caffeineExpanded} setIsExpanded={setCaffeineExpanded}>
                <AbuseContent.Caffeine/>
            </PhoneViewAddictionCard>
            <PhoneViewAddictionCard contentData={ContentData["nicotine"]} isExpanded={nicotineExpanded} setIsExpanded={setNicotineExpanded}>
                <AbuseContent.Nicotine/>
            </PhoneViewAddictionCard>
            <PhoneViewAddictionCard contentData={ContentData["alcohol"]} isExpanded={alcoholExpanded} setIsExpanded={setAlcoholExpanded}>
                <AbuseContent.Alcohol/>
            </PhoneViewAddictionCard>
            <PhoneViewAddictionCard contentData={ContentData["phone-addiction"]} isExpanded={phoneAddictionExpanded} setIsExpanded={setPhoneAddictionExpanded}>
                <AbuseContent.PhoneAddiction/>
            </PhoneViewAddictionCard>
            <PhoneViewAddictionCard contentData={ContentData["food"]} isExpanded={foodExpanded} setIsExpanded={setFoodExpanded}>
                <AbuseContent.Food/>
            </PhoneViewAddictionCard>

            <h1 className={Styles.Title}>Hälsosamma recept</h1>
            <h1 className={Styles.Title}>KOKOSKAKOR</h1>
            <li className={Styles.Paragraph}>½ tsk smält kokosolja</li>
            <li className={Styles.Paragraph}>120 g mandelmjöl</li>
            <li className={Styles.Paragraph}>30 g kokosflingor</li>
            <li className={Styles.Paragraph}>60 g kokosolja</li>
            <li className={Styles.Paragraph}>1 stort ägg</li>
            <li className={Styles.Paragraph}>1/tsk vaniljpulver</li>
            <li className={Styles.Paragraph}>40 g mjuka urkärnade finhackade dadlar</li>
            <li className={Styles.Paragraph}>1 nypa salt</li>
            <p className={Styles.Paragraph}>X smaksätt med Carob, torkad frukt (finhackad) för extra tuggmotstånd.</p>
            <p className={Styles.Paragraph}>180 grader, 160 varmluft. Smörj plåten med kokosolja</p>
            <p className={Styles.Paragraph}>Mixa alla ingredienser med stavmixer, tillsätt lite vatten om degen är för smulig.</p>
            <p className={Styles.Paragraph}>Forma degen till 20 små bollar och lägg på plåten.</p>
            <p className={Styles.Paragraph}>Platta till ca 1 cm tjocklek.</p>
            <p className={Styles.Paragraph}>Grädda 15 minuter</p>
            <p className={Styles.Paragraph}>Låt svalna en stund på plåten, lägg sedan på galler.</p>
            <p className={Styles.Paragraph}>Förvara i lufttät burk i frysen.</p>
            <h1 className={Styles.Title}>DADELBOLLAR   25 stor</h1>
            <li className={Styles.Paragraph}>2 1/2 dl urkärnade dadlar eller dadelmassa (125 g)</li>
            <li className={Styles.Paragraph}>1 1/2 dk kokosmjölk</li>
            <li className={Styles.Paragraph}>ev 1 krm salt</li>
            <li className={Styles.Paragraph}>ev lite vaniljpulver</li>
            <li className={Styles.Paragraph}>1 1/2 dl mandlar ev svagt rostade</li>
            <li className={Styles.Paragraph}>3 dl Saltå dinkelflingor eller fiberhavregryn </li>
            <li className={Styles.Paragraph}>1/2-1 1/2 dl kokosmjölk </li>
            <li className={Styles.Paragraph}>kokosflingor</li>
            <p className={Styles.Paragraph}>-Koka dadlarna några minuter i 1 1/2 dl kokosmjölk tills det blir mjuka </p>
            <p className={Styles.Paragraph}>-Rör ev ner salt och vaniljpulver och mosa väl eller mixa med mixerstav</p>
            <p className={Styles.Paragraph}>-Blanda i dinkelflingor eller havregryn och tillsätt mer kokosmjölk till en jämn smet</p>
            <p className={Styles.Paragraph}>-Forma till små bollar och rulla dom i kokosflingor </p>
            <p className={Styles.Paragraph}>-Förvara i kylskåp</p>
        </div>
    )
};

export default AbuseWrapper;