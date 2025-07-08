import { ReactNode, useState } from "react";
import Styles from "./RecipeCard.module.css";
import Button from "../../../../components/Button/Button";

const RecipeCard = ({
    title, idName, ingredientsContent, instructionsContent
} : {
    title?: ReactNode, idName: string, ingredientsContent?: ReactNode, instructionsContent?: ReactNode
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    return(
        <div className={`${Styles.RecipeCardView} ${!isExpanded && Styles.ExpandEntireElement}`} id={idName} onClick={() => {!isExpanded && setIsExpanded(true)}}>
            <h1 className={Styles.Title}>{title}</h1>
            <hr className={Styles.HeaderRow}/>

            <div className={`${Styles.ContentView} ${isExpanded && Styles.ContentViewExpanded}`}>
                {ingredientsContent && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>{"Ingredienser"}</h1>}
                <div id={`${idName}-ingredients`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && ingredientsContent}
                </div>

                {instructionsContent && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>{"Instruktioner"}</h1>}
                <div id={`${idName}-instructions`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && instructionsContent}
                </div>

                <Button semiOpaque={true} onClick={() => {setIsExpanded(!isExpanded)}}>{isExpanded ? <>{"Stäng"}</> : <>{"Läs mer"}</>}</Button>
            </div>
        </div>
    )
};

export default RecipeCard;