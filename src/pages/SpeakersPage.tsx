import Container from "../components/Container";
import PageNameComp from "../components/PageNameComp";
import ProductsWithDescription from "../components/ProductsWithDescription";
import { speakerPageContent } from "../data";
function SpeakersPage() {

    return (
        <>
            <PageNameComp title="SPEAKERS" />
            <Container><ProductsWithDescription data={speakerPageContent} /></Container>
        </>
    );
}

export default SpeakersPage;
