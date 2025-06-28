import Styles from "./ZigZag.module.css";
import { ReactComponent as GenericStar } from "../../assets/vector-icons/generic-star-icon.svg";

    const ZigZag = ({contentData} : {contentData?: any[]}) => {

        return(
            <div className={Styles.ZigZagView}>
                {contentData?.map((Content, index) => (
                    <div key={index} className={`${Styles.ContentBlockView} ${index % 2 && Styles.ContentViewReverse}`}>
                        <div className={`${Styles.ContentDataBlock} ${index % 2 && Styles.ContentDataBlockReverse}`}>
                            <Content/>
                        </div>
                        <div className={Styles.ContentIconWrapper}>
                            <GenericStar className={Styles.ContentIcon}/>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

export default ZigZag