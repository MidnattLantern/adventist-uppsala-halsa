import Styles from "./AboutUsWrapper.module.css";
import { ReactNode } from "react";
import { ReactComponent as GenericStar } from "../../assets/vector-icons/generic-star-icon.svg";
import { Paragraph1 } from "../../content/aboutUs/Paragraph1";
import { Paragraph2 } from "../../content/aboutUs/Paragraph2";
import { Paragraph3 } from "../../content/aboutUs/Paragraph3";
import { Paragraph4 } from "../../content/aboutUs/Paragraph4";
import { Paragraph5 } from "../../content/aboutUs/Paragraph5";
import { Paragraph6 } from "../../content/aboutUs/Paragraph6";
import { Paragraph7 } from "../../content/aboutUs/Paragraph7";
import { Paragraph8 } from "../../content/aboutUs/Paragraph8";
import { Paragraph9 } from "../../content/aboutUs/Paragraph9";
import { Paragraph10 } from "../../content/aboutUs/Paragraph10";
import { Paragraph11 } from "../../content/aboutUs/Paragraph11";

const paragraphs = [
  Paragraph1,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Paragraph7,
  Paragraph8,
  Paragraph9,
  Paragraph10,
  Paragraph11,
];

const FIRST_PARAGRAPH = 0;
const BREAK_PARAGRAPH = 5;
const LAST_PARAGRAPH = paragraphs.length;

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
    const ZigZag = ({children} : {children?:ReactNode}) => {
        return(
            <div className={Styles.ZigZagView}>
                {children}
            </div>
        )
    };

    const renderParagraphs = (start: number, end: number) => {
        return(
            paragraphs.slice(start, end).map((Content, i) => 
                <ContentBlock key={start + i} reverse={i % 2 === 0}>
                    <Content />
                </ContentBlock>
            )
        )
    };

    return(
        <div className={Styles.AboutUsWrapperView}>
            <h1 className={Styles.Title}>{"Vilka är vi?"}</h1>
            <ZigZag> {renderParagraphs(FIRST_PARAGRAPH, BREAK_PARAGRAPH)} </ZigZag>
            <hr className={Styles.LineBreak}/>
            <h1 className={Styles.Title}>{"BATTLE CREEK SANITARIUM"}</h1>
            <ZigZag> {renderParagraphs(BREAK_PARAGRAPH, LAST_PARAGRAPH)} </ZigZag>
        </div>
    )
};

export default AboutUsWrapper;