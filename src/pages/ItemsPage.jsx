import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import ItemList from "../components/modules/ItemList";
import peliculas from "../data/movie.js"

const ItemsPage = () => {
    return(
        <>
        <Header />
        <ItemList peliculas={peliculas}/>
        <Footer />
        </>
    );
}

export default ItemsPage