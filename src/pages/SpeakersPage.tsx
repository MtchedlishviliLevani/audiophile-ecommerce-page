import PageNameComp from "../components/PageNameComp";
import ProductsWithDescription from "../components/ProductsWithDescription";
import { speakerPageContent } from "../data";

function SpeakersPage() {
    return (
        <>
            <PageNameComp title="SPEAKERS" />
            <div className="container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto">
                <ProductsWithDescription data={speakerPageContent} />
            </div>
        </>
    );
}

export default SpeakersPage;
