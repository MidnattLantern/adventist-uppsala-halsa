// work in progress -Alma
import Styles from "./PhoneHealthKeyCard.module.css";
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

const PhoneHealthKeyCard = ({
    contentData,
    isExpanded,
    setIsExpanded
} : {
    contentData: HealthKeyContent;
    isExpanded: boolean;
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

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
            <p className={Styles.PhotoCredits}>
                {" Foto av "} <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href={contentData.photoCredit.nameURL}>{contentData.photoCredit.name}</a>
                {" Från "} <a className={Styles.PhotoCreditsLink} target="_blank" rel="noreferrer" href={contentData.photoCredit.sourceURL}>{contentData.photoCredit.source}</a>
            </p>
        )
    };

    return (
        <div className={Styles.HealthKeyCardContainer}>
            <ImageAsCardBackground source={image} />
            <div className={Styles.HealthCardView}>
                <div className={`${Styles.TitleAndContentContainer} ${isExpanded && Styles.ExpandedTitleAndContentContainer}`}>
                    <h1 className={Styles.WaterCardHeader}>{contentData.title}</h1>
                    {isExpanded && <ExpandedContent/>}
                </div>
                <div className={Styles.ClickableImageContainer}>
                    <ClickableImage onClick={() => {setIsExpanded(!isExpanded)}} src={image}>Läs mer</ClickableImage>
                </div>
            </div>
            <PhotoCredits />
        </div>
    )
};

export default PhoneHealthKeyCard;