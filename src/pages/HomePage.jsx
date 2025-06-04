import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import CardList from "../components/modules/CardList";
import Hero from "../components/modules/Hero";

const beneficios =[
    {id:1, title:"A", description:""},
    {id:1, title:"A", description:""},
    {id:1, title:"A", description:""},
    {id:1, title:"A", description:""},
    {id:1, title:"A", description:""}
]

const HomePage = () => {
    return(
        <>
        <Header />
        <Hero />
        <section className="container mt-5">
            <CardList beneficios={beneficios} />
        </section>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nemo quam nisi corrupti cumque dolorum.</span>
        <Footer />
        </>
    );
}

export default HomePage