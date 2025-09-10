import Masonry from "react-masonry-css";
import Styles from "./AbuseWrapper.module.css";
import MasonryStyles from "./Masonry.module.css";
import PhoneViewAddictionCard from "./components/AddictionCard/PhoneViewAddictionCard";
import LargeViewAddictionCard from "./components/AddictionCard/LargeViewAddictionCard";
import Introduction from "./components/Introduction/Introduction";
import ContentData from "../../content/abuse/abuse-data.json"
import { useState } from "react";
import AbuseContent from "../../content/abuse/AbuseContent";
import { useViewPortContext } from "../../contexts/useViewportContext";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import RecipeContent from "../../content/abuse/RecipeContent";
import ReplacementCard from "./components/ReplacementCard/ReplacementCard";
import ReplacementContent from "../../content/abuse/ReplacementContent";

const AbuseWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const VIEWPORT_BREAKPOINT = 768;
    const [sugarExpanded, setSugarExpanded] = useState<boolean>(false); // "Socker"
    const [caffeineExpanded, setCaffeineExpanded] = useState<boolean>(false); // "Koffein"
    const [nicotineExpanded, setNicotineExpanded] = useState<boolean>(false); // "Nikotin"
    const [alcoholExpanded, setAlcoholExpanded] = useState<boolean>(false); // "Alkohol"
    const [phoneAddictionExpanded, setPhoneAddictionExpanded] = useState<boolean>(false); // "Mobilberoende"
    const [foodExpanded, setFoodExpanded] = useState<boolean>(false); // "Food"

    return(
        <div className={Styles.AbuseWrapperView}>
            <Introduction/>
            <h1 className={Styles.Title}>{"VANLIGA BEROENDEN"}</h1>
            <div className={Styles.AddictionSection}>
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["sugar"]} isExpanded={sugarExpanded} setIsExpanded={setSugarExpanded}>
                    <AbuseContent.Sugar/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["sugar"]} isExpanded={sugarExpanded} setIsExpanded={setSugarExpanded}>
                    <AbuseContent.Sugar/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["caffeine"]} isExpanded={caffeineExpanded} setIsExpanded={setCaffeineExpanded}>
                    <AbuseContent.Caffeine/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["caffeine"]} isExpanded={caffeineExpanded} setIsExpanded={setCaffeineExpanded}>
                    <AbuseContent.Caffeine/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["nicotine"]} isExpanded={nicotineExpanded} setIsExpanded={setNicotineExpanded}>
                    <AbuseContent.Nicotine/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["nicotine"]} isExpanded={nicotineExpanded} setIsExpanded={setNicotineExpanded}>
                    <AbuseContent.Nicotine/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["alcohol"]} isExpanded={alcoholExpanded} setIsExpanded={setAlcoholExpanded}>
                    <AbuseContent.Alcohol/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["alcohol"]} isExpanded={alcoholExpanded} setIsExpanded={setAlcoholExpanded}>
                    <AbuseContent.Alcohol/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["phone-addiction"]} isExpanded={phoneAddictionExpanded} setIsExpanded={setPhoneAddictionExpanded}>
                    <AbuseContent.PhoneAddiction/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["phone-addiction"]} isExpanded={phoneAddictionExpanded} setIsExpanded={setPhoneAddictionExpanded}>
                    <AbuseContent.PhoneAddiction/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["food"]} isExpanded={foodExpanded} setIsExpanded={setFoodExpanded}>
                    <AbuseContent.Food/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["food"]} isExpanded={foodExpanded} setIsExpanded={setFoodExpanded}>
                    <AbuseContent.Food/>
                </LargeViewAddictionCard>
                }
            </div>

            <h1 className={Styles.Title}>{"HÄLSOSAMMA RECEPT"}</h1>
            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1 //BREAKPOINT_DESKTOP
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >
                <RecipeCard
                idName="coconut-cookies"
                title="Kokoskakor"
                ingredientsContent={<>
                    <RecipeContent.CoconutCookiesIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.CoconutCookiesInstructions/>
                </>}
                />

                <RecipeCard
                idName="date-balls"
                title="Dadelboller"
                ingredientsContent={<>
                    <RecipeContent.DateBallsIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.DateBallsInstructions/>
                </>}
                />

                <RecipeCard
                idName="weed-pesto"
                title="Ogräspesto"
                ingredientsContent={<>
                    <RecipeContent.WeedPestoIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.WeedPestoInstructions/>
                </>}
                />

                <RecipeCard
                idName="fried-dandelion-buds"
                title="Stekta Maskrosknoppas"
                ingredientsContent={<>
                    <RecipeContent.FriedDandelionBudsIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.FriedDandelionBudsInstructions/>
                </>}
                />

            </Masonry>

            <h1 className={Styles.Title}>{"ERSÄTTNING"}</h1>

            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1 //BREAKPOINT_DESKTOP
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >
                <ReplacementCard
                    title={"Cikoriarot"}
                    idName="chicoryroot"
                    content={<ReplacementContent.ChicoryrootContent/>}
                />
                <ReplacementCard
                    title={"Carob"}
                    idName="carob"
                    content={<ReplacementContent.ChagaContent/>}
                />
                <ReplacementCard
                    title={"Chaga Sprängticka"}
                    idName="chaga"
                    content={<ReplacementContent.CarobContent/>}
                />
            </Masonry>
        </div>
    )
};

export default AbuseWrapper;