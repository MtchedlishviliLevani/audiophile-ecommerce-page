import Container from "../components/Container"
import PageNameComp from "../components/PageNameComp"
import ProductsWithDescription from "../components/ProductsWithDescription"
import { earphonePageContent } from "../data"

function EarphonePage() {
    return (
        <>
            <PageNameComp title="EARPHONES" />
            <Container><ProductsWithDescription data={earphonePageContent} /></Container>

        </>
    )
}

export default EarphonePage
