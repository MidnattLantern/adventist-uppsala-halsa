import Styles from "./ZigZag.module.css";
import { ReactComponent as GenericStar } from "../../assets/vector-icons/generic-star-icon.svg";

    const ZigZag = ({contentData} : {contentData?: any[]}) => {

        return(
            <div className={Styles.ZigZagView}>
                {contentData?.map((Content, index) => {
                    const reverse = index % 2 === 0;
                    return (
                    <div key={index} className={`${Styles.ContentBlockView} ${reverse && Styles.ContentViewReverse}`}>
                        <div className={`${Styles.ContentDataBlock} ${reverse && Styles.ContentDataBlockReverse}`}>
                            <Content/>
                        </div>
                        <div className={Styles.ContentIconWrapper}>
                            <GenericStar className={Styles.ContentIcon}/>
                        </div>
                    </div>
                )})}
            </div>
        )
    };

export default ZigZag