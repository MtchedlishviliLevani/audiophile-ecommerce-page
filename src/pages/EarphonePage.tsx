import Container from "../components/Container"
import PageNameComp from "../components/PageNameComp"
import ProductsWithDescription from "../components/ProductsWithDescription"
import { earphonePageContent } from "../data"
// import ProductsWithDescription from "../components/ProductsWithDescription"

function EarphonePage() {
    return (
        <>
            <PageNameComp title="EARPHONES" />
            <Container><ProductsWithDescription data={earphonePageContent} /></Container>

            {/* <ProductsWithDescription /> */}
        </>
    )
}

export default EarphonePage
