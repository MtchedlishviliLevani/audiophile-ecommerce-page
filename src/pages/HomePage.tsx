import NewestItem from "../components/homePage/NewestItem";
import PreferredProducts from "../components/homePage/PreferredProducts";

function HomePage() {
    return (
        <>
            <NewestItem />
            <div className="container"><PreferredProducts /></div>
        </>
    )
}

export default HomePage
