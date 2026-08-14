import { Styled } from "./App.styled";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExperimentsSection from "./components/ExperimentsSection";
import StackSection from "./components/StackSection";
import ProcessSection from "./components/ProcessSection";
import MetricsSection from "./components/MetricsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
    return (
        <Styled.Wrapper>
            <Header />

            <main>
                <HeroSection />
                <ExperimentsSection />
                <StackSection />
                <ProcessSection />
                <MetricsSection />
                <AboutSection />
            </main>

            <Footer />
        </Styled.Wrapper>
    );
}

export default App;
