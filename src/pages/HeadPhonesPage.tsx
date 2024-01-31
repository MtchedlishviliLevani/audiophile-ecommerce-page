import PageNameComp from "../components/PageNameComp"
import Headphones from "../components/headphonePage/Headphones"

function HeadPhonesPage() {
    return (
        <>
            <PageNameComp title="HEADPHONES" />
            <div className="container px-[5%] sm:px-[0]  sm:max-w-[90%] xl:max-w-[1110px] 2xl:max-w-[1300px]  mx-auto">
                <Headphones />
            </div></>
    )
}

export default HeadPhonesPage
