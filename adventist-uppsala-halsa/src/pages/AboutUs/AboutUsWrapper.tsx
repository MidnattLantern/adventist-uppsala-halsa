import Styles from "./AboutUsWrapper.module.css";

const AboutUsWrapper = () => {

    return(
        <div className={Styles.AboutUsWrapperView}>
            <h1 className={Styles.Title}>Vilka är vi?</h1>
            <p className={Styles.Paragraph}>En hälsosam livsstil har praktiserats av sjundedagsadventister sedan mitten av 1800-talet.</p>
            <p className={Styles.Paragraph}>Adventisterna driver universitet, sjukhus och hälsocenter på många ställen i världen.</p>
            <p className={Styles.Paragraph}>Ett välkänt universitetssjukhus är Loma Linda i Kalifornien, erkänt som ledande inom hälso- och sjukvård, inklusive banbrytande arbete inom områden som organtransplantation, cancerbehandling och hjärtvård.</p>
            <p className={Styles.Paragraph}>Omfattande hälsostudier har genomförts med kopplingen mellan livsstil och ett längre och friskare liv.</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-1">adventisthealthstudy.org/studies/AHS-1</a>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-2">adventisthealthstudy.org/studies/AHS-2</a>
            <p className={Styles.Paragraph}>Loma Linda i Kalifornien är en av 5 platser i världen - blå zoner - där befolkningen är friskare, och lever avsevärt mycket längre än den övriga befolkningen.</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://www.bluezones.com/explorations/loma-linda-california/">bluezones.com/explorations/loma-linda-california</a>
            <h1 className={Styles.Title}>BATTLE CREEK SANITARIUM</h1>
            <p className={Styles.Paragraph}>Battle Creek Sanitarium, Springfield, Michigan i USA var en världsberömd kurort, eller spa, baserad på hälsoprinciper som förespråkades av SDA kyrkan. </p>
            <p className={Styles.Paragraph}>1876-1943 förestods den av dr John Harvey Kellog, som numera är mer känd för Corn Flakes.</p>
            <p className={Styles.Paragraph}>Banbrytande metoder som ljusterapi, vattenterapi, rörelse, rätt vegetarisk kost, vila var principer som användes för att bota dåtida sjukdomar.</p>
            <p className={Styles.Paragraph}>Alla terapier utfördes med förtröstan på gudomlig kraft och kärlek.</p>
            <p className={Styles.Paragraph}>TBC var den kanske mest botade sjukdomen. Naturen var en av de viktigaste faktorerna i läkeprocessen. </p>
            <p className={Styles.Paragraph}>Högt uppsatta politiker med familjer, och affärsmän sökte sig till Battle Creek.</p>
        </div>
    )
};

export default AboutUsWrapper;