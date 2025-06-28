import { ReactNode, useState } from "react";
import Styles from "./NaturalMedecineCard.module.css";
import Button from "../../../../components/Button/Button";

const NaturalMedecineCard = ({
    title, idName, effectsContent, recipeContent, treatmentContent
} : {
    title?: ReactNode, idName: string, effectsContent?: ReactNode, recipeContent?: ReactNode, treatmentContent?: ReactNode
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return(
        <div className={`${Styles.NaturalMedecineCardView} ${!isExpanded && Styles.ExpandEntireElement}`} id={idName} onClick={() => {!isExpanded && setIsExpanded(true)}}>
            <h1 className={Styles.Title}>{title}</h1>
            <hr className={Styles.HeaderRow}/>

            <div className={`${Styles.ContentView} ${isExpanded && Styles.ContentViewExpanded}`}>
                {effectsContent && <h1 className={Styles.SectionTitle}>effekter</h1>}
                <div id={`${idName}-effects`}>
                    {isExpanded && effectsContent}
                </div>

                {recipeContent && <h1 className={Styles.SectionTitle}>recept</h1>}
                <div id={`${idName}-recipe`}>
                    {isExpanded && recipeContent}
                </div>

                {treatmentContent && <h1 className={Styles.SectionTitle}>behandling</h1>}
                <div id={`${idName}-treatment`}>
                    {isExpanded && treatmentContent}
                </div>
                <Button semiOpaque={true} onClick={() => {setIsExpanded(!isExpanded)}}>{isExpanded ? <>Stäng</> : <>Läs mer</>}</Button>
            </div>
        </div>
    )
};

export default NaturalMedecineCard;