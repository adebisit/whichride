import Hero from "./components/Hero";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import HowTo from "./components/HowTo";
import WhyUs from "./components/WhyUs";
import SingUp from "./components/SingUp";


function App() {
    return (
        <>
            <Header />
            <main>
                <section className="hero">
                    <Hero />
                </section>
                <div className="sectionWrapper">
                    <section id="howTo" className="page2">
                        <HowTo />
                    </section>
                </div>
                <section id="whyUs" className="page3">
                    <WhyUs />
                </section>
                <div className="sectionWrapper">
                    <section id="signUp" className="page4">
                        <SingUp />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
