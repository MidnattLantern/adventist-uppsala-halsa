// Work in progress - Alma
import Styles from "./EightHealthKeysWrapper.module.css";
import WaterImage from "../../assets/images/unsplash-nicolas-ruiz-vatten.jpg";
import { ReactNode, useState } from "react";

const EightHealthKeysWrapper = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const CollapsedContent = () => {
        // CP: Custom Paragraph
        // alternative to <p> so that you don't have to declare className for every single <p> element
        const CP = ({children} : { children: ReactNode }) => {
            return(<p className={Styles.CardParagraph}>{children}</p>)
        }

        return(
            <div>
                <CP>Börja dagen med att dricka 1-2 glas ljummet vatten. </CP>
                <CP>Det hjälper alla kroppens organ att förbereda sig för dagen arbete, samt förebygger förstoppning.</CP>
                <CP>Vår kropp behöver 2-3 liter vatten per dag, drick lite då och då. Ta gärna ett par korn Celtic salt, och låt smälta i munnen före varje glas vatten. Det innehåller 82 mineraler, samma mineralsammansättning som finns i våra kroppsvätskor. </CP>
                <hr className={Styles.HeaderRow}/>
            </div>
        )
    }

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
                <img className={Styles.WaterImageAppearance} src={WaterImage} alt={"Water by Nicolas Ruiz"}/>
                <div className={`${Styles.ContentCardContainer} ${isCollapsed && Styles.CollapsedContentCardContainer}`}>
                    <h1 className={Styles.WaterCardHeader}>{"Vatten"}</h1>
                    <hr className={Styles.HeaderRow}/>
                    {isCollapsed && <CollapsedContent/>}
                    <button
                    className={Styles.CollapseButton}
                    onClick={() => {setIsCollapsed(!isCollapsed)}}
                    >{isCollapsed ?
                    "Stäng"
                    :
                    "Läs mer"
                    }</button>
                </div>
                <p className={Styles.PhotoCredits}>Foto av <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href="https://unsplash.com/@nicoruiz01981?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nicolas Ruiz</a> från <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href="https://unsplash.com/photos/clear-drinking-glass-with-water-aFbow3dw8QA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p>
            </div>

        </div>
    )
};

export default EightHealthKeysWrapper;