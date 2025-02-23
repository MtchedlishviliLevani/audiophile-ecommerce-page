import PageNameComp from "../components/PageNameComp"
import ProductsWithDescription from "../components/ProductsWithDescription"
import { earphonePageContent } from "../data"

function EarphonePage() {
    return (
        <>
            <PageNameComp title="EARPHONES" />
            <div className="container"><ProductsWithDescription data={earphonePageContent} /></div>

        </>
    )
}

export default EarphonePage
