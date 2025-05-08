// Work in progress - Alma
import Styles from "./EightHealthKeysWrapper.module.css";
import WaterImage from "../../assets/images/unsplash-nicolas-ruiz-vatten.jpg";
import { ReactNode, useState } from "react";
import ClickableImage from "../../components/ClickableImage/ClickableImage";

const EightHealthKeysWrapper = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const CollapsedContent = () => {
        // CP: Custom Paragraph
        // alternative to <p> so that you don't have to declare className for every single <p> element
        const CP = ({children} : { children?: ReactNode }) => {
            return(<p className={Styles.CardParagraph}>{children}</p>)
        };
        //CHR: Custom Header Row
        // alternative to <hr/> so that you don't have to declare className for every single <hr/> element
        const CHR = () => {
            return(<hr className={Styles.HeaderRow}/>)
        };

        return(
            <>
            <div className={Styles.ContentParagraphContainer}>
                <CP>Börja dagen med att dricka 1-2 glas ljummet vatten. </CP>
                <CP>Det hjälper alla kroppens organ att förbereda sig för dagen arbete, samt förebygger förstoppning.</CP>
                <CP>Vår kropp behöver 2-3 liter vatten per dag, drick lite då och då. Ta gärna ett par korn Celtic salt, och låt smälta i munnen före varje glas vatten. Det innehåller 82 mineraler, samma mineralsammansättning som finns i våra kroppsvätskor. </CP>

                <CP>Undvik att dricka i samband med mat, drick hellre 30 minuter före, eller 90 min efter måltid, så fungerar matsmältningen bättre.</CP>
                <CP>Bada eller duscha varje dag.</CP>
                <CP>Kontrastdusch: 3 min varmt /30 sek kallt 3-6 gånger.  Det stimulerar blodcirkulationen, och stärker immunförsvaret.</CP>

                <CP>Upplev vattnets välgörande verkan. Genom kontrastduschar och kallbad härdas kroppen, vilket leder till att du inte fryser lika lätt.</CP>
                <CP>Tänk på att endast friska personer får utsättas för intensiv härdning.</CP>
                <CP>Men en lätt härdande stimulans kan även uppnås genom att djupandas vid ett öppet fönster med kall luft som strömmar in.</CP>

                <CP>Vatten kan också användas som behandling i form av is, vattenånga, ångbastu, fotbad, varma och kalla omslag, samt inpackningar, med goda resultat.</CP>
            </div>
            <div className={Styles.CollapseButtonContainer}>
                <button
                className={Styles.CollapseButton}
                onClick={() => {setIsCollapsed(!isCollapsed)}}
                >
                {"Stäng"}
                </button>
            </div>
            </>
        )
    };

    return(
        <div className={Styles.EightHealthKeysWrapperComponent}>
            <ul>
                <li>
                    {"Vatten"}
                </li>
                <li>
                    {"Avhållsamhet"}
                </li>
                <li>
                    {"Rörelse"}
                </li>
                <li>
                    {"Skolsken"}
                </li>
                <li>
                    {"Återhämtning"}
                </li>
                <li>
                    {"Gudsförtröstan"}
                </li>
                <li>
                    O<sub>2</sub> {"(syre)"}
                </li>
                <li>
                    {"Diet"}
                </li>
            </ul>

            <div className={Styles.WaterCardContainer}>
                <img className={Styles.WaterCardBackgroundImage} src={WaterImage} alt={""}/>
                <ClickableImage onClick={() => {setIsCollapsed(true)}} src={WaterImage}>Läs mer</ClickableImage>
                <div className={`${Styles.ContentCardContainer} ${isCollapsed && Styles.CollapsedContentCardContainer}`}>
                    <h1 className={Styles.WaterCardHeader}>{"Vatten"}</h1>
                    {isCollapsed && <CollapsedContent/>}
                </div>
                <p className={Styles.PhotoCredits}>Foto av <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href="https://unsplash.com/@nicoruiz01981?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nicolas Ruiz</a> från <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href="https://unsplash.com/photos/clear-drinking-glass-with-water-aFbow3dw8QA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
            </div>

            <button
            onClick={() => {setIsCollapsed(!isCollapsed)}}
            >
            {"toggle"}
            </button>

        </div>
    )
};

export default EightHealthKeysWrapper;