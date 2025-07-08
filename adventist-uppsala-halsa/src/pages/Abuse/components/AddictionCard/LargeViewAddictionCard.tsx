import Styles from "./LargeViewAddictionCard.module.css";
import ClickableImage from "../../../../components/ClickableImage/ClickableImage";
import { MapAbuseImages } from "../../../../assets/images/MapAbuseImages";
import { ReactNode } from "react";

// matching health keys .json files
type PhotoCredit = {
  name: string;
  nameURL: string;
  source: string;
  sourceURL: string;
};
type AddictionContent = {
    id: string;
    title: string;
    photoCredit: PhotoCredit;
};

const LargeViewAddictionCard = ({
    children,
    contentData,
    isExpanded,
    setIsExpanded
} : {
    children?: ReactNode;
    contentData: AddictionContent;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const image = MapAbuseImages[contentData.id][0];
    const ExpandedContent = () => {
    return(
        <>
            <div className={Styles.ContentParagraphContainer}>
                {children}
            </div>
            <div className={Styles.ExpandButtonContainer}>
                <button
                className={Styles.ExpandButton}
                onClick={() => {setIsExpanded(false)}}
                >
                {"Stäng"}
                </button>
            </div>
            </>
        )
    };

    // custom descriptive elements
    const ImageAsCardBackground = ({source} : {source?:string}) => {
        return <img className={Styles.ImageAsCardBackground} src={source} alt={""}/>
    };
    const PhotoCredits = () => {
        return (
            <div className={Styles.PhotoCreditsView}>
                <p className={Styles.PhotoCredits}>
                    {" Foto av "}
                </p>
                <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href={contentData.photoCredit.nameURL}>{contentData.photoCredit.name}</a>

                <div style={{'margin': '8px'}} // <br/>
                />

                <p className={Styles.PhotoCredits}>
                    {" Från "}
                    <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href={contentData.photoCredit.sourceURL}>{contentData.photoCredit.source}</a>
                </p>
            </div>
        )
    };

    return (
        <div className={Styles.LargeViewAddictionCardView}>
            <ImageAsCardBackground source={image} />
            <div className={Styles.AddictionCardView}>
                <div className={`${Styles.TitleAndContentContainer} ${isExpanded && Styles.ExpandedPhoneContentCardContainer}`}>
                    <button className={Styles.ButtonFrame} onClick={() => {setIsExpanded(!isExpanded)}}><p>{isExpanded ? "Stäng" : "Läs mer"}</p></button>
                    <h1 className={Styles.CardHeader}>{contentData.title}</h1>
                    <PhotoCredits />
                </div>
                <div className={Styles.ClickableImageContainer}>
                    <div className={`${Styles.LargeViewExpandedContentContainer} ${isExpanded && Styles.ExpandedLargeViewExpandedContentContainer}`}>
                        <ExpandedContent />
                    </div>
                    <ClickableImage onClick={() => {setIsExpanded(!isExpanded)}} src={image}>Läs mer</ClickableImage>
                </div>
            </div>
        </div>
    )
};

export default LargeViewAddictionCard;