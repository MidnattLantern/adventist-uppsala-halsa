import Styles from "./Dropdown.module.css";
import { ReactNode, useEffect, useState } from "react";

const Dropdown = ({
    title,
    children,
    expandedByDefault
} : {
    title?: string,
    children?: ReactNode,
    expandedByDefault?: boolean
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    useEffect(() => {
        expandedByDefault && setIsExpanded(true);
    }, [expandedByDefault])

    return(
        <div className={Styles.DropdownView}>
            <div className={Styles.TitleExpandButtonView} onClick={() => {setIsExpanded(!isExpanded)}}>
                <h1 className={Styles.TitleText}>{title}</h1>
                <button className={Styles.ExpandButton}>{isExpanded ? 'Stäng' : 'Öppna'}</button>
            </div>
            <div className={`${Styles.ChildrenView} ${isExpanded && Styles.ExpandedChildrenView}`}>
                {children}
            </div>
        </div>
    )
};

export default Dropdown;