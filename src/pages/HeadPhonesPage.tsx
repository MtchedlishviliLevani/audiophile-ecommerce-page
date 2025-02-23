import PageNameComp from "../components/PageNameComp"
import ProductsWithDescription from "../components/ProductsWithDescription"
import { headphonePageContent } from "../data"


function HeadPhonesPage() {

    return (
        <>
            <PageNameComp title="HEADPHONES" />
            <div className="container"><ProductsWithDescription data={headphonePageContent} /></div>                {/* <Headphones /> */}

        </>
    )
}

export default HeadPhonesPage
