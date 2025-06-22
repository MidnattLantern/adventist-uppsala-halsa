// original title: NATURLIGA BEHANDLINGAR MOT FÖRKYLNING OCH INFLUENSA
import Styles from "./NaturalMedicineWrapper.module.css";

const NaturalMedicineWrapper = () => {

    return(
        <div className={Styles.NaturalMedicineWrapperView}>

            <h1 className={Styles.Title}>FÖRKYLNING & NATURLIG BEHANDLING</h1>
            <p className={Styles.Paragraph}>Påbörja behandling så tidigt som möjligt.</p>
            <p className={Styles.Paragraph}>Influensabomben och ingefärashot kan även användas förebyggande.</p>

            <h1>Effekter</h1>
            <h1>Recept</h1>
            <h1>Behandlingar</h1>
            <hr/>

            <div id="meadowsweet">
                <h1 className={Styles.Title}>ÄLGÖRT</h1> {/* picture of meadowsweet */}
                <p className={Styles.Paragraph}><strong>Älgörtste:</strong> - se recept. Observera försiktighet.</p>

                <h2>{"(effects)"}</h2>
                <div id="meadowsweet-effects">
                    <p className={Styles.Paragraph}>Älgört innehåller salicylsyra, som</p>
                    <li className={Styles.Paragraph}>Är antiinflammatorisk och smärtstillande. Hjälper mot huvudvärk och ledvärk.</li>
                    <li className={Styles.Paragraph}>Är febernedsättande</li>
                    <li className={Styles.Paragraph}>Stärker andnings- och immunförsvaret.</li>
                    <li className={Styles.Paragraph}>Är svett- och urindrivande</li>
                    <li className={Styles.Paragraph}>Reglerar blodtrycket</li>
                    <li className={Styles.Paragraph}>Hjälper mot matsmältningsproblem</li>
                    <li className={Styles.Paragraph}>Hjälper mot halsbränna</li>
                </div>

                <h2>{"(recipe)"}</h2>
                <div id="meadowsweet-recipe">
                    <p className={Styles.Paragraph}><strong>ÄLGÖRTSTE</strong></p>
                    <p className={Styles.Paragraph}>Plocka under säsong, och torka. Förvara i mörk, tättslutande burk.</p>
                    <p className={Styles.Paragraph}>1-2 tsk torkad smulad älgört</p>
                    <p className={Styles.Paragraph}>2,5 dl vatten.</p>
                    <p className={Styles.Paragraph}>Låt dra i 5-10 minuter.</p>
                    <p className={Styles.Paragraph}>Alternativt i kallt vatten över natten.</p>
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="meadowsweet-treatment">
                    <p className={Styles.Paragraph}>Iakttag försiktighet om du</p>
                    <li className={Styles.Paragraph}>Tar blodförtunnande läkemedel</li>
                    <li className={Styles.Paragraph}>Är allergisk mot aspirin</li>
                </div>

            </div>
            <hr/>
            <div id="flubomb">
                <h1 className={Styles.Title}>INFLUENSABOMBEN</h1>

                <h2>{"(effects)"}</h2>
                <div id="flubomb-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="flubomb-recipe">
                    <table className={Styles.TableSize}>
                        <tr>
                            <td className={Styles.Paragraph}>Gurkmeja</td>
                            <td className={Styles.Paragraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Vitlök</td>
                            <td className={Styles.Paragraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Ingefära</td>
                            <td className={Styles.Paragraph}>80 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Pepparrot</td>
                            <td className={Styles.Paragraph}>40 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Gul lök</td>
                            <td className={Styles.Paragraph}>40 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Cayennepeppar</td>
                            <td className={Styles.Paragraph}>20 g</td>
                        </tr>
                        <tr>
                            <td className={Styles.Paragraph}>Svartpeppar</td>
                            <td className={Styles.Paragraph}>5 g</td>
                        </tr>
                    </table>
                    <p className={Styles.Paragraph}>Ta ½ tesked av blandningen och rör ut i juicen av ½ citron.</p>
                    <p className={Styles.Paragraph}>Blanda i ett glas varmt (ej kokande) vatten.</p>
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="flubomb-treatment">
                    <p className={Styles.Paragraph}>Drick 3 gånger om dagen.</p>
                </div>

            </div>
            <hr/>
            <div id="watertherapy">
                <h1 className={Styles.Title}>Vattenterapi</h1>

                <h2>{"(effects)"}</h2>
                <div id="watertherapy-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="watertherapy-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="watertherapy-treatment">
                    <p className={Styles.Paragraph}>Drick rikligt med vatten, 2-3 liter på en dag. Gärna ett par korn Celtic mineralsalt före varje glas.</p>
                    <p className={Styles.Paragraph}>Kontrastdusch - 3 minuter varmt/ 30 sekunder kallt x 3, upprepa 3 ggr/dag. Om hög feber kan du sänka temperaturen genom ett svalt bad/dusch.</p>
                    <p className={Styles.Paragraph}>Kallt omslag runt halsen</p>
                    <p className={Styles.Paragraph}>Inandning av vattenånga 3 minuter - badda med kallt vatten 30 sekunder x 3. Effektivt mot nästäppa och bihåleinflammation. Du kan använda någon droppe av eterisk olja, tex eucalyptus, timjan eller rosmarin i vattenångan.</p>
                    <p className={Styles.Paragraph}>Gurgla med saltlösning eller starkt  salviate.</p>
                    <p className={Styles.Paragraph}>Varmt fotbad</p>                
                </div>

            </div>
            <hr/>
            <div id="cayennepepper">
                <h1>{"Cayennepeppar"}</h1>

                <h2>{"(effects)"}</h2>
                <div id="cayennepepper-effects">
                    <p>Effektivt mot halsont.</p>
                </div>

                <h2>{"(recipe)"}</h2>
                <div id="cayennepepper-recipe">
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="cayennepepper-treatment">
                    <p className={Styles.Paragraph}>(ej het och kryddig) Sniffa lite i vardera näsborre mot nästäppa och bihåleinflammation. ¼ tesked sväljs med vatten.</p>
                </div>

            </div>
            <hr/>
            <div id="coughmedecine">
                <h1 className={Styles.Title}>HOSTMEDICIN</h1>

                <h2>{"(effects)"}</h2>
                <div id="coughmedecine-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="coughmedecine-recipe">
                    <p className={Styles.Paragraph}>Varva lökringar och honung i en burk,</p>
                    <p className={Styles.Paragraph}>låt stå i rumstemperatur 24 timmar.</p>
                    <p className={Styles.Paragraph}>Sila bort lökringarna.</p>
                    <p className={Styles.Paragraph}>Förvaras i kylskåp 1 månad.</p>
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="coughmedecine-treatment">
                    <p className={Styles.Paragraph}>¼ tsk 3 ggr/dag för barn under 3 år</p>
                    <p className={Styles.Paragraph}>½ tsk 3 ggr/dag för barn över 3 år</p>
                    <p className={Styles.Paragraph}>1 tsk 3 ggr/dag för vuxna.</p>
                </div>

            </div>
            <hr/>
            <div id="otitis">
                <h1 className={Styles.Title}>Öroninflammation</h1>
                <p className={Styles.Paragraph}><strong>Kokt Gullök</strong></p>

                <h2>{"(effects)"}</h2>
                <div id="otitis-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="otitis-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="otitis-treatment">
                    <p className={Styles.Paragraph}>Koka löken hel, dela sedan på mitten.</p>
                    <p className={Styles.Paragraph}>Krama ur lite löksaft och häll i örat efter att det svalnat något.</p>
                    <p className={Styles.Paragraph}>Linda in den andra lökhalvan i bomullstyg, eller en strumpa, och lägg på örat.</p>
                    <p className={Styles.Paragraph}>Upprepa behandlingen vid behov.</p>
                </div>

            </div>
            <hr/>
            <div id="onion-cough">
                <h1>{"Hosta"}</h1>

                <h2>{"(effects)"}</h2>
                <div id="onion-cough-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="onion-cough-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="onion-cough-treatment">
                    <h1 className={Styles.Title}>GULLÖK/ VITLÖK FÖR HOSTA</h1>
                    <p className={Styles.Paragraph}><strong>Hosta:</strong></p>
                    <li className={Styles.Paragraph}>Skivad lök bredvid sängen under natten</li>
                    <li className={Styles.Paragraph}>Hostmedicin, se recept</li>
                    <li className={Styles.Paragraph}>Skivad lök under fötterna i plastpåse eller strumpa</li>
                    <li className={Styles.Paragraph}>Spädbarn: Skivad vitlök, men ej direkt på huden - Linda in i en kompress eller bomullstyg (Alt. En droppe eucalyptusolja på fontanellen)</li>
                    <li className={Styles.Paragraph}>Varmt fotbad med lök 20-30 minuter. <strong>Om du har neuropati, diabetes eller sår: max 37,8 grader i vattnet.</strong></li>
                </div>

            </div>
            <hr/>
            <div id="sore-throat">
                <h1>{"Halsont"}</h1>

                <h2>{"(effects)"}</h2>
                <div id="sore-throat-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="sore-throat-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="sore-throat-treatment">
                    <li className={Styles.Paragraph}>Lökomslag runt halsen, eller på bröstet, om besvären sitter längre ner.</li>
                    <li className={Styles.Paragraph}>Kallt omslag</li>
                    <li className={Styles.Paragraph}>Eucalyptusolja på halsen.</li>
                </div>

            </div>
            <hr/>
            <div id="ginger-shot">
                <h1>{"INGEFÄRA SHOT"}</h1>

                <h2>{"(effects)"}</h2>
                <div id="ginger-shot-effects">

                </div>

                <h2>{"(recipe)"}</h2>
                <div id="ginger-shot-recipe">
                    <p className={Styles.Paragraph}>80 g färsk ingefära</p>
                    <p className={Styles.Paragraph}>0,5 dl honung</p>
                    <p className={Styles.Paragraph}>2-3 citroner (saft)</p>
                    <p className={Styles.Paragraph}>1,4 dl vatten</p>
                    <p className={Styles.Paragraph}>Ingefäran hackas grovt, utan att skalas.</p>
                    <p className={Styles.Paragraph}>Blanda alla ingredienser, utom citron, och kör i blender.</p>
                    <p className={Styles.Paragraph}>Sila innehållet i ett grovt tyg, så stora bitar inte kommer med.</p>
                    <p className={Styles.Paragraph}>Blanda i citronsaft efter önskad smak.</p>
                    <p className={Styles.Paragraph}>Även extra honung vid behov.</p>
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="ginger-shot-treatment">
                
                </div>

            </div>
            <hr/>
            <h1 className={Styles.Title}>FIKA FÖR DIN HÄLSA</h1>
            <hr/>
            <div id="chicoryroot">
                <h1>{"CIKORIAROT"}</h1>
                <h2>{"(effects)"}</h2>
                <div id="chicoryroot-effects">
                    <p className={Styles.Paragraph}>En god och nyttig kaffeersättning</p>
                    <p className={Styles.Paragraph}>Rik på vitaminer, mineraler, fibrer och antioxidanter</p>
                    <p className={Styles.Paragraph}>Minskar risken för hjärt-kärlsjukdomar, har en blodtryckssänkande effekt.</p>
                    <p className={Styles.Paragraph}>Kostfibrer stödjer matsmältningen, kan förhindra förstoppning och även tjocktarmscancer.</p>
                    <p className={Styles.Paragraph}>Håller blodsockret stabilt och stödjer hälsosam viktminskning.</p>
                    <p className={Styles.Paragraph}>Renar kroppen - rensar levern och blodet </p>
                    <p className={Styles.Paragraph}>Hjälper kroppen att motstå gallstenar, njurstenar och leverstenar,</p>
                    <p className={Styles.Paragraph}>Inulin - en löslig fiber som har antiinflammatoriska egenskaper som är bra för både immun- och nervsystemet. Minskar ångest och depression.</p>
                    <p className={Styles.Paragraph}>Cikoria - är utmärkt för att bekämpa parasiter och maskar i tarmen.</p>
                    <p className={Styles.Paragraph}>Antioxidanter hjälper oss att bekämpa oxidativ stress i kroppen</p>
                </div>

                <h2>{"(recipe)"}</h2>
                <div id="chicoryroot-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="chicoryroot-treatment">
                
                </div>

            </div>
            <hr/>
            <div id="carob">
                <h1>{"CAROB"}</h1>
                <h2>{"(effects)"}</h2>
                <div id="carob-effects">
                    <p className={Styles.Paragraph}>Kakaoersättning, fritt från koffein</p>
                    <p className={Styles.Paragraph}>Bra källa till vitaminer och mineraler</p>
                    <li className={Styles.Paragraph}>Minskar risken för hjärt- och kärlsjukdomar</li>
                    <li className={Styles.Paragraph}>Balanserar blodtrycket</li>
                    <li className={Styles.Paragraph}>Sänker kolesterolbeläggning</li>
                    <li className={Styles.Paragraph}>Minskar sötsuget</li>
                    <li className={Styles.Paragraph}>Stödjer matsmältningen</li>
                    <li className={Styles.Paragraph}>Har en snabbt stoppande effekt vid diarre</li>
                    <li className={Styles.Paragraph}>Reglerar blodsockernivån</li>
                    <p className={Styles.Paragraph}>Vitamin A och B2 är bra för din hud och ögonhälsa.</p>
                </div>

                <h2>{"(recipe)"}</h2>
                <div id="carob-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="carob-treatment">
                
                </div>

            </div>
            <hr/>
            <div id="chaga">
                <h1>{"CHAGA (SPRÄNGTICKA)"}</h1>

                <h2>{"(effects)"}</h2>
                <div id="chaga-effects">
                    <p className={Styles.Paragraph}>Koka och drick som te, kaffe eller använd som bas i en smoothie.</p>
                    <li className={Styles.Paragraph}>Är en av de mest värdefulla råvarorna i naturen</li>
                    <li className={Styles.Paragraph}>Innehåller många vitaminer och mineraler,  betagluken, steroler och fytonäringsämnen.</li>
                    <li className={Styles.Paragraph}>Antioxidanter reducerar fria radikaler i kroppen, och just chaga har mest antioxidanter av alla växter. Den har ett ORAC-värde på 100 000 jämfört med blåbårets ORAC-värde på 9000. (ORAC-värdet anger födans förmåga att neutralisera de skadliga fria radikalerna)</li>
                    <li className={Styles.Paragraph}>Är effektiv mot psoriasis och cancer</li>
                    <li className={Styles.Paragraph}>Stärker immunförsvaret</li>
                    <li className={Styles.Paragraph}>Lindrar infektioner och inflammationer</li>
                    <li className={Styles.Paragraph}>Effektiv mot virussjukdom</li>
                    <li className={Styles.Paragraph}>Balanserar blodtrycket</li>
                    <li className={Styles.Paragraph}>Sänker blodsockernivån</li>
                    <li className={Styles.Paragraph}>Förbättrar kvaliteten på hår och hud.</li>
                    <li className={Styles.Paragraph}>Lindrar matsmältningsproblem</li>
                    <li className={Styles.Paragraph}>Kan användas vid detox och fasta.</li>
                </div>

                <h2>{"(recipe)"}</h2>
                <div id="chaga-recipe">
                
                </div>

                <h2>{"(treatment)"}</h2>
                <div id="chaga-treatment">
                
                </div>

            </div>

            <p className={Styles.Paragraph}><strong>8 hälsonycklar</strong> hjälper dig att bli fri från ohälsosamma vanor och beroenden.</p>
            <p className={Styles.Paragraph}>Det tar 21 dagar att etablera en vana, och efter 60 dagar sitter det.</p>
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