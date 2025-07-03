import ZigZag from "../../../../components/ZigZag/ZigZag";
import Styles from "./Introduction.module.css";

const Introduction = () => {
    const IntroContent1 = () => {
        return <>
            <p className={Styles.Paragraph}><strong>Dopamin</strong> - en av de viktigaste signalsubstanserna i det centrala nerv- systemet - är kopplat till hjärnans belöningssystem. </p>
            <li className={Styles.Paragraph}>Det ger eufori och lustkänsla.</li>
            <li className={Styles.Paragraph}>Det är också lugnande och smärtstillande, det stimulerar motoriken, höjer koncentrationen och effektiviserar inlärning.</li>
            <li className={Styles.Paragraph}>Öka dopaminnivån naturligt genom 8 hälsonycklar, tex. genom träning och vistelse i naturen.</li>
            <li className={Styles.Paragraph}>En vördnadsbjudande naturupplevelse höjer dopaminnivån, och effekten varar i 1 vecka.</li>
        </>
    };
    const IntroContent2 = () => {
        return <>
            <p className={Styles.Paragraph}>Alkohol, socker, nikotin, mobiltelefon triggar belöningssystem, till exempel dopamin</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://axelsons.se/dopamin/">axelsons.se/dopamin</a>
        </>
    };
    const IntroContent3 = () => {
        return <>
            <p className={Styles.Paragraph}><strong>SYMTOM VID DOPAMINBRIST</strong></p>
            <li className={Styles.Paragraph}>Kramp i muskler, spasmer eller darrningar</li>
            <li className={Styles.Paragraph}>Låg energinivå</li>
            <li className={Styles.Paragraph}>Trötthet</li>
            <li className={Styles.Paragraph}>Smärta och värk i kroppen</li>
            <li className={Styles.Paragraph}>Rubbad matspjälkning</li>
            <li className={Styles.Paragraph}>Problem med svalg och med att äta</li>
            <li className={Styles.Paragraph}>Problem med balansen</li>
            <li className={Styles.Paragraph}>Hallucinoid</li>
            <li className={Styles.Paragraph}>Pratar långsammare än vanligt</li>
            <li className={Styles.Paragraph}>Pendlar mycket i vikt</li>
            <li className={Styles.Paragraph}>Dålig sömn, svårt att somna, störningar i sömnen</li>
            <li className={Styles.Paragraph}>Svårigheter att fokusera</li>
            <li className={Styles.Paragraph}>Saknar motivation</li>
            <li className={Styles.Paragraph}>Saknar självinsikt och självdistans</li>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://axelsons.se">axelsons.se</a>
        </>
    };

    return <>
        <h1 className={Styles.Title}>DOPAMIN, VÄLBEFINNANDE & MISSBRUK</h1>
        <ZigZag contentData={[IntroContent1, IntroContent2, IntroContent3]}/>
    </>
};

export default Introduction;