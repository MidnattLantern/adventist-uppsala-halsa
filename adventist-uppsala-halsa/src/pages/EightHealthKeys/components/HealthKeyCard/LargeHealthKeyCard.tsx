import Styles from "./LargeHealthKeyCard.module.css";
import ClickableImage from "../../../../components/ClickableImage/ClickableImage";
import { MapHealthKeyImages } from "../../../../assets/images/MapHealthKeyImages";

// matching health keys .json files
type PhotoCredit = {
  name: string;
  nameURL: string;
  source: string;
  sourceURL: string;
};
type HealthKeyContent = {
    id: string;
    title: string;
    paragraphs: string[];
    photoCredit: PhotoCredit;
};

const LargeHealthKeyCard = ({
    customTitle,
    contentData,
    isExpanded,
    setIsExpanded
} : {
    customTitle?: React.ReactNode, // optional prop designed because of "02 syre"
    contentData: HealthKeyContent;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
} ) => {

    const image = MapHealthKeyImages[contentData.id][0];
    const ExpandedContent = () => {
    return(
        <>
            <div className={Styles.ContentParagraphContainer}>
                {contentData.paragraphs.map((Paragraph, index) => (
                    <p className={Styles.CardParagraph} key={index}>{Paragraph}</p>
                ))}
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

                <br/><br/>

                <p className={Styles.PhotoCredits}>
                    {" Från "}
                    <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href={contentData.photoCredit.sourceURL}>{contentData.photoCredit.source}</a>
                </p>
            </div>
        )
    };

    return (
        <div className={Styles.HealthKeyCardContainer}>
            <ImageAsCardBackground source={image} />
            <div className={Styles.HealthCardView}>
                <div className={`${Styles.TitleAndContentContainer} ${isExpanded && Styles.ExpandedPhoneContentCardContainer}`}>
                    <button className={Styles.ButtonFrame} onClick={() => {setIsExpanded(!isExpanded)}}><p>{isExpanded ? "Stäng" : "Läs mer"}</p></button>
                    {customTitle ? (
                        <div className={Styles.CardHeader}>{customTitle}</div>
                    ) : (
                        <h1 className={Styles.CardHeader}>{contentData.title}</h1>
                    )}
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

export default LargeHealthKeyCard;