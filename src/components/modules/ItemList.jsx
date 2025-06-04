import ItemCard from "../components/ItemCard";

const ItemList = ({ peliculas }) => {
    return (
        <section className="container mt-5">
            <div className="d-flex text-center gap-2 justify-content-center mt-2 mb-2">
                <h1>Lista de Películas</h1>
            </div>
            <div className="d-flex text-center gap-3">
                {peliculas.map(pelicula =>
                    <ItemCard id={pelicula.id} pelicula={pelicula} />
                )}
            </div>
        </section>
    );
}

export default ItemList