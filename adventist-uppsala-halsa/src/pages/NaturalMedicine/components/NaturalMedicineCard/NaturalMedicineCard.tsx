import { ReactNode, useState } from "react";
import Styles from "./NaturalMedicineCard.module.css";
import Button from "../../../../components/Button/Button";

const NaturalMedicineCard = ({
    title, idName, effectsContent, recipeContent, treatmentContent
} : {
    title?: ReactNode, idName: string, effectsContent?: ReactNode, recipeContent?: ReactNode, treatmentContent?: ReactNode
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return(
        <div className={`${Styles.NaturalMedicineCardView} ${!isExpanded && Styles.ExpandEntireElement}`} id={idName} onClick={() => {!isExpanded && setIsExpanded(true)}}>
            <h1 className={Styles.Title}>{title}</h1>
            <hr className={Styles.HeaderRow}/>

            <div className={`${Styles.ContentView} ${isExpanded && Styles.ContentViewExpanded}`}>
                {effectsContent && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>effekter</h1>}
                <div id={`${idName}-effects`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && effectsContent}
                </div>

                {recipeContent && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>recept</h1>}
                <div id={`${idName}-recipe`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && recipeContent}
                </div>

                {treatmentContent && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>behandling</h1>}
                <div id={`${idName}-treatment`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && treatmentContent}
                </div>
                <Button semiOpaque={true} onClick={() => {setIsExpanded(!isExpanded)}}>{isExpanded ? <>Stäng</> : <>Läs mer</>}</Button>
            </div>
        </div>
    )
};

export default NaturalMedicineCard;