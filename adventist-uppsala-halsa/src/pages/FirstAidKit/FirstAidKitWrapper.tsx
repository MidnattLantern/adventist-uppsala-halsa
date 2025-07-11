import Styles from "./FirstAidKitWrapper.module.css";

const FirstAidKitWrapper = () => {

    return(
        <div className={Styles.FirstAidKitWrapperView}>
            <h1 className={Styles.Title}>1:a HJÄLPEN KIT</h1>
            <div className={Styles.InfoView}>
                <p className={Styles.Paragraph}><strong>Innehåll:</strong></p>
                <li className={Styles.Paragraph}>Cayennepeppar- för cirkulationssvikt (ca 1/2 tsk i munnen),smärtlindring  och för att stoppa blödning. </li>
                <li className={Styles.Paragraph}>Träkol- för orm och insektsbett ( drick 1 msk blandat i vatten) träkolsförband på bettet,se nedan. </li>
                <li className={Styles.Paragraph}>Eucalyptus eller lavendelolja i vatten för sårtvätt </li>
                <br/>
                <li className={Styles.Paragraph}>Sax</li>
                <li className={Styles.Paragraph}>Pincett</li>
                <li className={Styles.Paragraph}>Säkerhetsnålar nål</li>
                <br/>
                <li className={Styles.Paragraph}>Förband, olika storlekar </li>
                <li className={Styles.Paragraph}>Kompresser</li>
                <li className={Styles.Paragraph}>Bandage x 2</li>
                <br/>
                <li className={Styles.Paragraph}>Plasrfolie</li>
                <li className={Styles.Paragraph}>Tejp, allergitestad</li>
                <li className={Styles.Paragraph}>Plastpåse för skräp</li>
                <br/>
                <li className={Styles.Paragraph}>Vatten</li>
            </div>
            
            <div className={Styles.InfoView}>
                <p className={Styles.Paragraph}><strong>Färdigt träkolsförband: </strong></p>
                <li className={Styles.Paragraph}>1 msk träkol</li>
                <li className={Styles.Paragraph}>1 msk psylliumhusk</li>
                <li className={Styles.Paragraph}>4 msk vatten</li>
                <p className={Styles.Paragraph}>Blandas i en förslutningsbar plastpåse 12x12 cm. Lång hållbarhet i kylskåp. Klipp till önskad storlek och avlägsna plasten på ena sidan och lägg på bettet. </p>
            </div>
            <div className={Styles.InfoView}>
                <p className={Styles.Paragraph}><strong><a className={Styles.InternalLink} href="#eight-health-keys">8 hälsonycklar</a> kan bromsa nervsjukdomars utveckling</strong></p>
                <li className={Styles.Paragraph}>Träning</li>
                <li className={Styles.Paragraph}>Växtbaserad kost (helst närodlad)</li>
                <li className={Styles.Paragraph}>Undvik skadliga animaliska oljor som margarin och fritösolja</li>
                <br/>
                <li className={Styles.Paragraph}>Uteslut de 5 allergenerna: jordnötter, vete, havre, socker och mejeriprodukter under en period av minst tre månader</li>
                <li className={Styles.Paragraph}>Undvik kemikalier och gifter.</li>
                <li className={Styles.Paragraph}>Rena kroppen genom att fasta. Naturliga klorofyllbaserade renare, dvs gröna blad, tex sallad, grönkål och mangold. eliminerar gifter som lagrats i kroppen.</li>
                <br/>
                <li className={Styles.Paragraph}>Träkol. </li>
            </div>
        </div>
    )
};

export default FirstAidKitWrapper;