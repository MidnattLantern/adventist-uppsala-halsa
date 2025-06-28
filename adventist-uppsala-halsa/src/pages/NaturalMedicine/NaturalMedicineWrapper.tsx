// original title: NATURLIGA BEHANDLINGAR MOT FÖRKYLNING OCH INFLUENSA
import NaturalMedecineCard from "./components/NaturalMedecineCard.tsx/NaturalMedecineCard";
import Styles from "./NaturalMedicineWrapper.module.css";

const NaturalMedicineWrapper = () => {

    return(
        <div className={Styles.NaturalMedicineWrapperView}>

            <h1 className={Styles.Title}>FÖRKYLNING & NATURLIG BEHANDLING</h1>
            <p className={Styles.Paragraph}>Påbörja behandling så tidigt som möjligt.</p>
            <p className={Styles.Paragraph}>Influensabomben och ingefärashot kan även användas förebyggande.</p>
            <p className={Styles.Paragraph}><strong>8 hälsonycklar</strong> hjälper dig att bli fri från ohälsosamma vanor och beroenden.</p>
            <p className={Styles.Paragraph}>Det tar 21 dagar att etablera en vana, och efter 60 dagar sitter det.</p>

            <table>
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
                        <a className={Styles.NavLink} href="#onion-cough">Hosta</a>
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

            <NaturalMedecineCard
                title={"älgörtste"}
                idName="meadowsweet"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Älgört innehåller salicylsyra, som</p>
                    <li className={Styles.AlternativeParagraph}>Är antiinflammatorisk och smärtstillande. Hjälper mot huvudvärk och ledvärk.</li>
                    <li className={Styles.AlternativeParagraph}>Är febernedsättande</li>
                    <li className={Styles.AlternativeParagraph}>Stärker andnings- och immunförsvaret.</li>
                    <li className={Styles.AlternativeParagraph}>Är svett- och urindrivande</li>
                    <li className={Styles.AlternativeParagraph}>Reglerar blodtrycket</li>
                    <li className={Styles.AlternativeParagraph}>Hjälper mot matsmältningsproblem</li>
                    <li className={Styles.AlternativeParagraph}>Hjälper mot halsbränna</li>
                </>}
                recipeContent={<>
                    <p className={Styles.AlternativeParagraph}>Plocka under säsong, och torka. Förvara i mörk, tättslutande burk.</p>
                    <p className={Styles.AlternativeParagraph}>1-2 tsk torkad smulad älgört</p>
                    <p className={Styles.AlternativeParagraph}>2,5 dl vatten.</p>
                    <p className={Styles.AlternativeParagraph}>Låt dra i 5-10 minuter.</p>
                    <p className={Styles.AlternativeParagraph}>Alternativt i kallt vatten över natten.</p>
                </>}
                treatmentContent={<>
                        <p className={Styles.AlternativeParagraph}>Iakttag försiktighet om du</p>
                        <li className={Styles.AlternativeParagraph}>Tar blodförtunnande läkemedel</li>
                        <li className={Styles.AlternativeParagraph}>Är allergisk mot aspirin</li>
                </>}
            />
            
            <NaturalMedecineCard
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
            
            <NaturalMedecineCard
                title={"Vattenterapi"}
                idName="watertherapy"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>Drick rikligt med vatten, 2-3 liter på en dag. Gärna ett par korn Celtic mineralsalt före varje glas.</p>
                    <p className={Styles.AlternativeParagraph}>Kontrastdusch - 3 minuter varmt/ 30 sekunder kallt x 3, upprepa 3 ggr/dag. Om hög feber kan du sänka temperaturen genom ett svalt bad/dusch.</p>
                    <p className={Styles.AlternativeParagraph}>Kallt omslag runt halsen</p>
                    <p className={Styles.AlternativeParagraph}>Inandning av vattenånga 3 minuter - badda med kallt vatten 30 sekunder x 3. Effektivt mot nästäppa och bihåleinflammation. Du kan använda någon droppe av eterisk olja, tex eucalyptus, timjan eller rosmarin i vattenångan.</p>
                    <p className={Styles.AlternativeParagraph}>Gurgla med saltlösning eller starkt  salviate.</p>
                    <p className={Styles.AlternativeParagraph}>Varmt fotbad</p>   
                </>}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedecineCard
                title={"Cayennepeppar"}
                idName="cayennepepper"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Effektivt mot halsont.</p>
                </>}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}>(ej het och kryddig) Sniffa lite i vardera näsborre mot nästäppa och bihåleinflammation. ¼ tesked sväljs med vatten.</p>
                </>}
            />
            
            <NaturalMedecineCard
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
                    <p className={Styles.AlternativeParagraph}>¼ tsk 3 ggr/dag för barn under 3 år</p>
                    <p className={Styles.AlternativeParagraph}>½ tsk 3 ggr/dag för barn över 3 år</p>
                    <p className={Styles.AlternativeParagraph}>1 tsk 3 ggr/dag för vuxna.</p>
                </>}
            />
            
            <NaturalMedecineCard
                title={"Öroninflammation"}
                idName="otitis"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <p className={Styles.AlternativeParagraph}><strong>Kokt Gullök</strong></p>
                    <p className={Styles.AlternativeParagraph}>Koka löken hel, dela sedan på mitten.</p>
                    <p className={Styles.AlternativeParagraph}>Krama ur lite löksaft och häll i örat efter att det svalnat något.</p>
                    <p className={Styles.AlternativeParagraph}>Linda in den andra lökhalvan i bomullstyg, eller en strumpa, och lägg på örat.</p>
                    <p className={Styles.AlternativeParagraph}>Upprepa behandlingen vid behov.</p>
                </>}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedecineCard
                title={"Hosta"}
                idName="onion-cough"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <h1 className={Styles.Title}>GULLÖK/ VITLÖK FÖR HOSTA</h1>
                    <p className={Styles.AlternativeParagraph}><strong>Hosta:</strong></p>
                    <li className={Styles.AlternativeParagraph}>Skivad lök bredvid sängen under natten</li>
                    <li className={Styles.AlternativeParagraph}>Hostmedicin, se recept</li>
                    <li className={Styles.AlternativeParagraph}>Skivad lök under fötterna i plastpåse eller strumpa</li>
                    <li className={Styles.AlternativeParagraph}>Spädbarn: Skivad vitlök, men ej direkt på huden - Linda in i en kompress eller bomullstyg (Alt. En droppe eucalyptusolja på fontanellen)</li>
                    <li className={Styles.AlternativeParagraph}>Varmt fotbad med lök 20-30 minuter. <strong>Om du har neuropati, diabetes eller sår: max 37,8 grader i vattnet.</strong></li>
                </>}
            />
            
            <NaturalMedecineCard
                title={"Halsont"}
                idName="sore-throat"
                effectsContent={null}
                recipeContent={null}
                treatmentContent={<>
                    <li className={Styles.AlternativeParagraph}>Lökomslag runt halsen, eller på bröstet, om besvären sitter längre ner.</li>
                    <li className={Styles.AlternativeParagraph}>Kallt omslag</li>
                    <li className={Styles.AlternativeParagraph}>Eucalyptusolja på halsen.</li>
                </>}
            />
            
            <NaturalMedecineCard
                title={"Ingefära Shot"}
                idName="ginger-shot"
                effectsContent={null}
                recipeContent={<>
                    <p className={Styles.AlternativeParagraph}>80 g färsk ingefära</p>
                    <p className={Styles.AlternativeParagraph}>0,5 dl honung</p>
                    <p className={Styles.AlternativeParagraph}>2-3 citroner (saft)</p>
                    <p className={Styles.AlternativeParagraph}>1,4 dl vatten</p>
                    <p className={Styles.AlternativeParagraph}>Ingefäran hackas grovt, utan att skalas.</p>
                    <p className={Styles.AlternativeParagraph}>Blanda alla ingredienser, utom citron, och kör i blender.</p>
                    <p className={Styles.AlternativeParagraph}>Sila innehållet i ett grovt tyg, så stora bitar inte kommer med.</p>
                    <p className={Styles.AlternativeParagraph}>Blanda i citronsaft efter önskad smak.</p>
                    <p className={Styles.AlternativeParagraph}>Även extra honung vid behov.</p>
                </>}
                treatmentContent={null}
            />

            <hr className={Styles.ThirdsBreaker}/>
            
            <NaturalMedecineCard
                title={"Cikoriarot"}
                idName="chicoryroot"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>En god och nyttig kaffeersättning</p>
                    <p className={Styles.AlternativeParagraph}>Rik på vitaminer, mineraler, fibrer och antioxidanter</p>
                    <p className={Styles.AlternativeParagraph}>Minskar risken för hjärt-kärlsjukdomar, har en blodtryckssänkande effekt.</p>
                    <p className={Styles.AlternativeParagraph}>Kostfibrer stödjer matsmältningen, kan förhindra förstoppning och även tjocktarmscancer.</p>
                    <p className={Styles.AlternativeParagraph}>Håller blodsockret stabilt och stödjer hälsosam viktminskning.</p>
                    <p className={Styles.AlternativeParagraph}>Renar kroppen - rensar levern och blodet </p>
                    <p className={Styles.AlternativeParagraph}>Hjälper kroppen att motstå gallstenar, njurstenar och leverstenar,</p>
                    <p className={Styles.AlternativeParagraph}>Inulin - en löslig fiber som har antiinflammatoriska egenskaper som är bra för både immun- och nervsystemet. Minskar ångest och depression.</p>
                    <p className={Styles.AlternativeParagraph}>Cikoria - är utmärkt för att bekämpa parasiter och maskar i tarmen.</p>
                    <p className={Styles.AlternativeParagraph}>Antioxidanter hjälper oss att bekämpa oxidativ stress i kroppen</p>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
            
            <NaturalMedecineCard
                title={"Carob"}
                idName="carob"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Kakaoersättning, fritt från koffein</p>
                    <p className={Styles.AlternativeParagraph}>Bra källa till vitaminer och mineraler</p>
                    <li className={Styles.AlternativeParagraph}>Minskar risken för hjärt- och kärlsjukdomar</li>
                    <li className={Styles.AlternativeParagraph}>Balanserar blodtrycket</li>
                    <li className={Styles.AlternativeParagraph}>Sänker kolesterolbeläggning</li>
                    <li className={Styles.AlternativeParagraph}>Minskar sötsuget</li>
                    <li className={Styles.AlternativeParagraph}>Stödjer matsmältningen</li>
                    <li className={Styles.AlternativeParagraph}>Har en snabbt stoppande effekt vid diarre</li>
                    <li className={Styles.AlternativeParagraph}>Reglerar blodsockernivån</li>
                    <p className={Styles.AlternativeParagraph}>Vitamin A och B2 är bra för din hud och ögonhälsa.</p>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
            
            <NaturalMedecineCard
                title={"Chaga Sprängticka"}
                idName="chaga"
                effectsContent={<>
                    <p className={Styles.AlternativeParagraph}>Koka och drick som te, kaffe eller använd som bas i en smoothie.</p>
                    <li className={Styles.AlternativeParagraph}>Är en av de mest värdefulla råvarorna i naturen</li>
                    <li className={Styles.AlternativeParagraph}>Innehåller många vitaminer och mineraler,  betagluken, steroler och fytonäringsämnen.</li>
                    <li className={Styles.AlternativeParagraph}>Antioxidanter reducerar fria radikaler i kroppen, och just chaga har mest antioxidanter av alla växter. Den har ett ORAC-värde på 100 000 jämfört med blåbårets ORAC-värde på 9000. (ORAC-värdet anger födans förmåga att neutralisera de skadliga fria radikalerna)</li>
                    <li className={Styles.AlternativeParagraph}>Är effektiv mot psoriasis och cancer</li>
                    <li className={Styles.AlternativeParagraph}>Stärker immunförsvaret</li>
                    <li className={Styles.AlternativeParagraph}>Lindrar infektioner och inflammationer</li>
                    <li className={Styles.AlternativeParagraph}>Effektiv mot virussjukdom</li>
                    <li className={Styles.AlternativeParagraph}>Balanserar blodtrycket</li>
                    <li className={Styles.AlternativeParagraph}>Sänker blodsockernivån</li>
                    <li className={Styles.AlternativeParagraph}>Förbättrar kvaliteten på hår och hud.</li>
                    <li className={Styles.AlternativeParagraph}>Lindrar matsmältningsproblem</li>
                    <li className={Styles.AlternativeParagraph}>Kan användas vid detox och fasta.</li>
                </>}
                recipeContent={null}
                treatmentContent={null}
            />
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