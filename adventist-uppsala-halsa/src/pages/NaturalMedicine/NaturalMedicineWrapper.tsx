// original title: NATURLIGA BEHANDLINGAR MOT FÖRKYLNING OCH INFLUENSA
import ZigZag from "../../components/ZigZag/ZigZag";
import NaturalMedicineCard from "./components/NaturalMedicineCard/NaturalMedicineCard";
import Styles from "./NaturalMedicineWrapper.module.css";

const Paragraph1 = () => {
    return <p className={Styles.Paragraph}>Påbörja behandling så tidigt som möjligt.</p>
}
const Paragraph2 = () => {
    return <p className={Styles.Paragraph}>Influensabomben och ingefärashot kan även användas förebyggande.</p>
}
const Paragraph3 = () => {
    return <p className={Styles.Paragraph}><a className={Styles.NavLink} href="#eight-health-keys">8 hälsonycklar</a> hjälper dig att bli fri från ohälsosamma vanor och beroenden.</p>
}
const Paragraph4 = () => {
    return <p className={Styles.Paragraph}>Det tar 21 dagar att etablera en vana, och efter 60 dagar sitter det.</p>
}

const NavigationTable = () => {
    return(
        <table className={Styles.NavLinkTable}>
            <tr className={Styles.NavLinkRow}>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#meadowsweet">Älgörtste</a>
                    <a className={Styles.NavLink} href="#flubomb">Influensabomben</a>
                    <a className={Styles.NavLink} href="#watertherapy">Vattenterapi</a>
                </td>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#cayennepepper">Cayennepeppar</a>
                    <a className={Styles.NavLink} href="#coughmedicine">Hostmedicin</a>
                    <a className={Styles.NavLink} href="#otitis">Öroninflammation</a>
                </td>
            </tr>
            <tr className={Styles.NavLinkRow}>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#cough">Hosta</a>
                    <a className={Styles.NavLink} href="#sore-throat">Halsont</a>
                    <a className={Styles.NavLink} href="#ginger-shot">Ingefära shot</a>
                </td>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#chicoryroot">Cikoriarot</a>
                    <a className={Styles.NavLink} href="#carob">Carob</a>
                    <a className={Styles.NavLink} href="#chaga">Chaga Sprängticka</a>
                </td>
            </tr>
        </table>
    )
};

const NaturalMedicineWrapper = () => {

    return(
        <div className={Styles.NaturalMedicineWrapperView}>

            <h1 className={Styles.Title}>FÖRKYLNING & NATURLIG BEHANDLING</h1>
            <ZigZag contentData={[ Paragraph1, Paragraph2, Paragraph3, Paragraph4 ]}/>
            <NavigationTable/>

            <NaturalMedicineCard
                title={"älgörtste"}
                idName="meadowsweet"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Älgört innehåller salicylsyra, som:</p>
                    <li className={Styles.AlternativeListItem}>Är antiinflammatorisk och smärtstillande. Hjälper mot huvudvärk och ledvärk.</li>
                    <li className={Styles.AlternativeListItem}>Är febernedsättande</li>
                    <li className={Styles.AlternativeListItem}>Stärker andnings- och immunförsvaret.</li>
                    <li className={Styles.AlternativeListItem}>Är svett- och urindrivande</li>
                    <li className={Styles.AlternativeListItem}>Reglerar blodtrycket</li>
                    <li className={Styles.AlternativeListItem}>Hjälper mot matsmältningsproblem</li>
                    <li className={Styles.AlternativeListItem}>Hjälper mot halsbränna</li>
                </>}
                recipeContent={<>
                    <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"torkad smulad älgört"}</td>
                            <td className={Styles.AlternativeParagraph}>{"1-2 tsk"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"vatten"}</td>
                            <td className={Styles.AlternativeParagraph}>{"2,5 dl"}</td>
                        </tr>
                    </table>
                    <p className={Styles.AlternativeParagraph}>Plocka under säsong, och torka. Förvara i mörk, tättslutande burk.</p>
                    <p className={Styles.AlternativeParagraph}>Låt dra i 5-10 minuter.</p>
                    <p className={Styles.AlternativeParagraph}>Alternativt i kallt vatten över natten.</p>
                </>}
                treatmentContent={<>
                        <p className={Styles.AlternativeParagraph}>Iakttag försiktighet om du</p>
                        <li className={Styles.AlternativeListItem}>Tar blodförtunnande läkemedel</li>
                        <li className={Styles.AlternativeListItem}>Är allergisk mot aspirin</li>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Influensabomben"}
                idName="flubomb"
                effectsContent={null}
                recipeContent={<>
                    <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Gurkmeja</td>
                            <td className={Styles.AlternativeParagraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Vitlök</td>
                            <td className={Styles.AlternativeParagraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Ingefära</td>
                            <td className={Styles.AlternativeParagraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Pepparrot</td>
                            <td className={Styles.AlternativeParagraph}>40 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Gul lök</td>
                            <td className={Styles.AlternativeParagraph}>40 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Cayennepeppar</td>
                            <td className={Styles.AlternativeParagraph}>20 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>Svartpeppar</td>
                            <td className={Styles.AlternativeParagraph}>5 g</td>
                        </tr>
                    </table>
                </>}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>Drick 3 gånger om dagen.</p>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Vattenterapi"}
                idName="watertherapy"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>Drick rikligt med vatten, 2-3 liter på en dag. Gärna ett par korn Celtic mineralsalt före varje glas.</p>
                    <p className={Styles.AlternativeParagraph}>Kontrastdusch:</p>
                    <li className={Styles.AlternativeListItem}>{"3 minuter varmt,"}</li>
                    <li className={Styles.AlternativeListItem}>{"30 sekunder kallt,"}</li>
                    <li className={Styles.AlternativeListItem}>{"upprepa 3 gånger per dag,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Om hög feber kan du sänka temperaturen genom ett svalt bad/dusch."}</li>
                    <p className={Styles.AlternativeParagraph}>Kallt omslag runt halsen.</p>
                    <p className={Styles.AlternativeParagraph}>Inandning av vattenånga:</p>
                    <li className={Styles.AlternativeListItem}>{"3 minuter,"}</li>
                    <li className={Styles.AlternativeListItem}>{"bada med kallt vatten i 30 sekunder,"}</li>
                    <li className={Styles.AlternativeListItem}>{"upprepa tre gånger."}</li>
                    <li className={Styles.AlternativeParagraph}>{"Effektivt mot nästäppa och bihåleinflammation. Du kan använda någon droppe av eterisk olja, tex eucalyptus, timjan eller rosmarin i vattenångan."}</li>
                    <p className={Styles.AlternativeParagraph}>Gurgla med saltlösning eller starkt  salviate.</p>
                    <p className={Styles.AlternativeParagraph}>Varmt fotbad.</p>   
                </>}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedicineCard
                title={"Cayennepeppar"}
                idName="cayennepepper"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Effektivt mot halsont.</p>
                </>}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>{"Ej het och kryddig. Sniffa lite i vardera näsborre mot nästäppa och bihåleinflammation. ¼ tesked sväljs med vatten."}</p>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Hostmedicin"}
                idName="coughmedicine"
                effectsContent={null}
                recipeContent={<>
                    <p className={Styles.AlternativeParagraph}>Varva lökringar och honung i en burk,</p>
                    <p className={Styles.AlternativeParagraph}>låt stå i rumstemperatur 24 timmar.</p>
                    <p className={Styles.AlternativeParagraph}>Sila bort lökringarna.</p>
                    <p className={Styles.AlternativeParagraph}>Förvaras i kylskåp 1 månad.</p>
                </>}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>{"Behandlas tre gånger om dagen."}</p>
                   <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Under 3 år"}</td>
                            <td className={Styles.AlternativeParagraph}>{"¼ tsk"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Över 3 år"}</td>
                            <td className={Styles.AlternativeParagraph}>{"½ tsk"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Över 18 år"}</td>
                            <td className={Styles.AlternativeParagraph}>{"1 tsk"}</td>
                        </tr>
                    </table>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Öroninflammation"}
                idName="otitis"
                effectsContent={null}
                recipeContent={<>
                   <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Gullök"}</td>
                            <td className={Styles.AlternativeParagraph}>{"En hel"}</td>
                        </tr>
                    </table>
                    <p className={Styles.AlternativeParagraph}>{"Koka gullöken, dela sedan på mitten."}</p>
                    <p className={Styles.AlternativeParagraph}>{"Krama ur löksaften."}</p>
                </>}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>{"Behandlas efter att det svalnat något."}</p>
                    <p className={Styles.AlternativeParagraph}>{"Häll lite löksaft i örat."}</p>
                    <p className={Styles.AlternativeParagraph}>{"Linda in den andra lökhalvan i bomullstyg, eller en strumpa, och lägg på örat."}</p>
                    <p className={Styles.AlternativeParagraph}>{"Upprepa behandlingen vid behov."}</p>
                </>}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedicineCard
                title={"Hosta"}
                idName="cough"
                effectsContent={null}
                recipeContent={<>
                    <p className={Styles.AlternativeParagraph}>Varva lökringar och honung i en burk,</p>
                    <p className={Styles.AlternativeParagraph}>låt stå i rumstemperatur 24 timmar.</p>
                    <p className={Styles.AlternativeParagraph}>Sila bort lökringarna.</p>
                    <p className={Styles.AlternativeParagraph}>Förvaras i kylskåp 1 månad.</p>
                </>}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>Skivad gullök bredvid sängen under natten.</p>
                    <p className={Styles.AlternativeParagraph}>Skivad gullök under fötterna i plastpåse eller strumpa.</p>
                    <p className={Styles.AlternativeParagraph}>{"Spädbarn: Skivad vitlök istället för gullök, men ej direkt på huden - Linda in i en kompress eller bomullstyg (Alt. En droppe eucalyptusolja på fontanellen)."}</p>
                    <p className={Styles.AlternativeParagraph}>Varmt fotbad med lök 20-30 minuter. <strong>Om du har neuropati, diabetes eller sår: max 37,8 grader i vattnet.</strong></p>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Halsont"}
                idName="sore-throat"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>Applicera lökomslag kring halsen, eller på bröstet, om besvären sitter längre ner.</p>
                    <p className={Styles.AlternativeParagraph}>Använd kallt omslag kring halsen.</p>
                    <p className={Styles.AlternativeParagraph}>Applicera eucalyptusolja kring halsen.</p>
                </>}
            />
            
            <NaturalMedicineCard
                title={"Ingefära Shot"}
                idName="ginger-shot"
                effectsContent={null}
                recipeContent={<>
                   <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Ingefära"}</td>
                            <td className={Styles.AlternativeParagraph}>{"80 g"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Honung"}</td>
                            <td className={Styles.AlternativeParagraph}>{"0,5 dl"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Utklämd saft"}</td>
                            <td className={Styles.AlternativeParagraph}>{"3 citroner"}</td>
                        </tr>
                        <tr>
                            <td className={Styles.AlternativeParagraph}>{"Vatten"}</td>
                            <td className={Styles.AlternativeParagraph}>{"1,4 dl"}</td>
                        </tr>
                    </table>
                    <p className={Styles.AlternativeParagraph}>Ingefäran hackas grovt, utan att skalas.</p>
                    <p className={Styles.AlternativeParagraph}>Blanda alla ingredienser, utom citron, och kör i blender.</p>
                    <p className={Styles.AlternativeParagraph}>Sila innehållet i ett grovt tyg, så stora bitar inte kommer med.</p>
                    <p className={Styles.AlternativeParagraph}>Blanda i citronsaft efter önskad smak.</p>
                    <p className={Styles.AlternativeParagraph}>Lägg till extra honung vid behov.</p>
                </>}
                treatmentContent={null}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedicineCard
                title={"Cikoriarot"}
                idName="chicoryroot"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>En god och nyttig kaffeersättning.</p>
                    <p className={Styles.AlternativeParagraph}>Rik på vitaminer, mineraler, fibrer och antioxidanter.</p>
                    <p className={Styles.AlternativeParagraph}>Minskar risken för hjärt-kärlsjukdomar, har en blodtryckssänkande effekt.</p>
                    <p className={Styles.AlternativeParagraph}>Kostfibrer stödjer matsmältningen, kan förhindra förstoppning och även tjocktarmscancer.</p>
                    <p className={Styles.AlternativeParagraph}>Håller blodsockret stabilt och stödjer hälsosam viktminskning.</p>
                    <p className={Styles.AlternativeParagraph}>Renar kroppen - rensar levern och blodet.</p>
                    <p className={Styles.AlternativeParagraph}>Hjälper kroppen att motstå gallstenar, njurstenar och leverstenar.</p>
                    <p className={Styles.AlternativeParagraph}>Inulin - en löslig fiber som har antiinflammatoriska egenskaper som är bra för både immun- och nervsystemet. Minskar ångest och depression.</p>
                    <p className={Styles.AlternativeParagraph}>Cikoria - är utmärkt för att bekämpa parasiter och maskar i tarmen.</p>
                    <p className={Styles.AlternativeParagraph}>Antioxidanter hjälper oss att bekämpa oxidativ stress i kroppen.</p>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
            
            <NaturalMedicineCard
                title={"Carob"}
                idName="carob"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Kakaoersättning, fritt från koffein.</p>
                    <p className={Styles.AlternativeParagraph}>Bra källa till vitaminer och mineraler.</p>
                    <p className={Styles.AlternativeParagraph}>Minskar risken för hjärt- och kärlsjukdomar.</p>
                    <p className={Styles.AlternativeParagraph}>Balanserar blodtrycket.</p>
                    <p className={Styles.AlternativeParagraph}>Sänker kolesterolbeläggning.</p>
                    <p className={Styles.AlternativeParagraph}>Minskar sötsuget.</p>
                    <p className={Styles.AlternativeParagraph}>Stödjer matsmältningen.</p>
                    <p className={Styles.AlternativeParagraph}>Har en snabbt stoppande effekt vid diarre.</p>
                    <p className={Styles.AlternativeParagraph}>Reglerar blodsockernivån.</p>
                    <p className={Styles.AlternativeParagraph}>Vitamin A och B2 är bra för din hud och ögonhälsa.</p>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
            
            <NaturalMedicineCard
                title={"Chaga Sprängticka"}
                idName="chaga"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Koka och drick som te, kaffe eller använd som bas i en smoothie.</p>
                    <p className={Styles.AlternativeParagraph}>{"Chaga:"}</p>
                    <li className={Styles.AlternativeListItem}>{"Är en av de mest värdefulla råvarorna i naturen,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Innehåller många vitaminer och mineraler,  betagluken, steroler och fytonäringsämnen,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Innehåller antioxidanter reducerar fria radikaler i kroppen, och just chaga har mest antioxidanter av alla växter. Den har ett ORAC-värde på 100 000 jämfört med blåbårets ORAC-värde på 9000. (ORAC-värdet anger födans förmåga att neutralisera de skadliga fria radikalerna),"}</li>
                    <li className={Styles.AlternativeListItem}>{"Är effektiv mot psoriasis och cancer,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Stärker immunförsvaret,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Lindrar infektioner och inflammationer,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Är effektiv mot virussjukdom,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Balanserar blodtrycket,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Sänker blodsockernivån,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Förbättrar kvaliteten på hår och hud,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Lindrar matsmältningsproblem,"}</li>
                    <li className={Styles.AlternativeListItem}>{"Kan användas vid detox och fasta."}</li>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
            <NavigationTable/>
        </div>
    )
};

export default NaturalMedicineWrapper;

/*
<div id="x">
    <h1>{"x"}</h1>

    <h2>{"(effects)"}</h2>
    <div id="x-effects">

    </div>

    <h2>{"(recipe)"}</h2>
    <div id="x-recipe">
    
    </div>

    <h2>{"(treatment)"}</h2>
    <div id="x-treatment">
    
    </div>

</div>
*/
/*
<NaturalMedecineCard
    title={null}
    idName=""
    effectsContent={null}
    recipeContent={null}
    treatmentContent={null}
/>
*/