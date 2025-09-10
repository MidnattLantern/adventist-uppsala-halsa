import { ReactNode, useState } from "react";
import Styles from "./ReplacementCard.module.css";
import Button from "../../../../components/Button/Button";

const ReplacementCard = ({
    title, idName, content
} : {
    title?: ReactNode, idName: string, content?: ReactNode
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return(
        <div className={`${Styles.ReplacementCardView} ${!isExpanded && Styles.ExpandEntireElement}`} id={idName} onClick={() => {!isExpanded && setIsExpanded(true)}}>
            <h1 className={Styles.Title}>{title}</h1>
            <hr className={Styles.HeaderRow}/>

            <div className={`${Styles.ContentView} ${isExpanded && Styles.ContentViewExpanded}`}>
                {content && <h1 className={`${Styles.SectionTitle} ${isExpanded && Styles.SectionTitleToLeft}`}>effekter</h1>}
                <div id={`${idName}`} className={`${isExpanded && Styles.SectionView}`}>
                    {isExpanded && content}
                </div>
                <Button semiOpaque={true} onClick={() => {setIsExpanded(!isExpanded)}}>{isExpanded ? <>Stäng</> : <>Läs mer</>}</Button>
            </div>
        </div>
    )
};

export default ReplacementCard;