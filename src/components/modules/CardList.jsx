import Card from "../components/Card";

const CardList = ({ beneficios }) => {
    return(
        <section className="container mt-5">
            <h1>Beneficios de Netflix</h1>
            <div className="d-flex text-center gap-2">
                {beneficios.map(beneficio =>
                    <Card id={beneficio.id} beneficio={beneficio} />
                )}
            </div>
        </section>
    );
}

export default CardList