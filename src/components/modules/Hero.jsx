const Hero = () => {
    return(
        <section className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Netflix</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4"></p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Ver Ahora</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Mi Lista</button>
            </div>
            </div>
            <div className="overflow-hidden">
            <div className="container px-5">
                <img src="https://hips.hearstapps.com/vidthumb/images/oppenheimer-cillian-murphy-6458ae16ab87c.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
            </div>
            </div>
        </section>
    );
}

export default Hero
