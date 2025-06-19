import Styles from "./AboutUsWrapper.module.css";
import { ReactNode } from "react";
import { ReactComponent as GenericStar } from "../../assets/vector-icons/generic-star-icon.svg";

const AboutUsWrapper = () => {

    // Components
    const ContentBlock = ({children, reverse} : {children?: ReactNode, reverse?: boolean}) => {
        return(
            <div className={`${Styles.ContentBlockView} ${reverse && Styles.ContentViewReverse}`}>
                <div className={`${Styles.ContentBlockChildren} ${reverse && Styles.ContentBlockChildrenReverse}`}>
                    {children}
                </div>
                <div className={Styles.ContentIconWrapper}>
                    <GenericStar className={Styles.ContentIcon}/>
                </div>
            </div>
        )
    };
    const ZigZag = ({children} : {children?:ReactNode}) => { // Special flex-wrap behaviour for desktop view
        return(
            <div className={Styles.ZigZagView}>
                {children}
            </div>
        )
    };

    return(
        <div className={Styles.AboutUsWrapperView}>
            <h1 className={Styles.Title}>{"Vilka är vi?"}</h1>
            <ZigZag>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"En hälsosam livsstil har praktiserats av sjundedagsadventister sedan mitten av 1800-talet."}</p>
                </ContentBlock>
                <ContentBlock>
                    <p className={Styles.Paragraph}>{"Adventisterna driver universitet, sjukhus och hälsocenter på många ställen i världen."}</p>
                </ContentBlock>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"Ett välkänt universitetssjukhus är Loma Linda i Kalifornien, erkänt som ledande inom hälso- och sjukvård, inklusive banbrytande arbete inom områden som organtransplantation, cancerbehandling och hjärtvård."}</p>
                </ContentBlock>
                <ContentBlock>
                    <p className={Styles.Paragraph}>{"Omfattande hälsostudier har genomförts med kopplingen mellan livsstil och ett längre och friskare liv:"}</p>
                    <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-1">{"adventisthealthstudy.org/studies/AHS-1"}</a>
                    <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-2">{"adventisthealthstudy.org/studies/AHS-2"}</a>
                </ContentBlock>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"Loma Linda i Kalifornien är en av 5 platser i världen - blå zoner - där befolkningen är friskare, och lever avsevärt mycket längre än den övriga befolkningen."}</p>
                    <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://www.bluezones.com/explorations/loma-linda-california/">bluezones.com/explorations/loma-linda-california</a>
                </ContentBlock>
            </ZigZag>
                <hr className={Styles.LineBreak}/>
                <h1 className={Styles.Title}>{"BATTLE CREEK SANITARIUM"}</h1>
            <ZigZag>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"Battle Creek Sanitarium, Springfield, Michigan i USA var en världsberömd kurort, eller spa, baserad på hälsoprinciper som förespråkades av SDA kyrkan."}</p>
                </ContentBlock>
                <ContentBlock>
                    <p className={Styles.Paragraph}>{"1876-1943 förestods den av dr John Harvey Kellog, som numera är mer känd för Corn Flakes."}</p>
                </ContentBlock>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"Banbrytande metoder som ljusterapi, vattenterapi, rörelse, rätt vegetarisk kost, vila var principer som användes för att bota dåtida sjukdomar."}</p>
                </ContentBlock>
                <ContentBlock>
                    <p className={Styles.Paragraph}>{"Alla terapier utfördes med förtröstan på gudomlig kraft och kärlek."}</p>
                </ContentBlock>
                <ContentBlock reverse={true}>
                    <p className={Styles.Paragraph}>{"TBC var den kanske mest botade sjukdomen. Naturen var en av de viktigaste faktorerna i läkeprocessen."}</p>
                </ContentBlock>
                <ContentBlock>
                    <p className={Styles.Paragraph}>{"Högt uppsatta politiker med familjer, och affärsmän sökte sig till Battle Creek."}</p>
                </ContentBlock>
            </ZigZag>
        </div>
    )
};

export default AboutUsWrapper;