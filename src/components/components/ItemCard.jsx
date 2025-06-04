const ItemCard = ({ pelicula }) => {
    return(
        <article className="card" style={{width:"400px"}}>
            <img src={pelicula.image} className="card-img-top" alt={pelicula.title} />
            <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">{pelicula.description}</p>
            </div>
        </article>
    );
}

export default ItemCard