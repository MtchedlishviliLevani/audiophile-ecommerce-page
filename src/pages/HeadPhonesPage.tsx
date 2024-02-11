import Container from "../components/Container"
import PageNameComp from "../components/PageNameComp"
import ProductsWithDescription from "../components/ProductsWithDescription"
import { headphonePageContent } from "../data"


function HeadPhonesPage() {

    return (
        <>
            <PageNameComp title="HEADPHONES" />
            <Container><ProductsWithDescription data={headphonePageContent} /></Container>                {/* <Headphones /> */}

        </>
    )
}

export default HeadPhonesPage
