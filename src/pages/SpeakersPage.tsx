import PageNameComp from "../components/PageNameComp";
import ProductsWithDescription from "../components/ProductsWithDescription";
import { speakerPageContent } from "../data";
function SpeakersPage() {

    return (
        <>
            <PageNameComp title="SPEAKERS" />
            <div className="container"><ProductsWithDescription data={speakerPageContent} /></div>
        </>
    );
}

export default SpeakersPage;
