const Card = ({ beneficio }) => {
    return(
        <article className="card" style={{width:"400px"}}>
        <img src="" className="card-img-top" alt={beneficio.title} />
        <div className="card-body">
            <h5 className="card-title">{beneficio.title}</h5>
            <p className="card-text">{beneficio.description}</p>
        </div>
        </article>
    );
}

export default Card