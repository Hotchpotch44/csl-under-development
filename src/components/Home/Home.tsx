import WeProvide from "../../pages/Home/AboutUsSection";
import CounterSection from "../../pages/Home/CounterSection";
import Hero from "../../pages/Home/Hero";
import HeroSection from "../../pages/Home/HeroSection";
import ProductCategoriesSection from "../../pages/Home/ProductCategoriesSection";
import AboutSection from "../../pages/Home/WeProvide";
import WhatWeEnsure from "../../pages/Home/WhatWeEnsure";
import WhyChooseUsSection from "../../pages/Home/WhyChooseUsSection";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <WeProvide />
            <ProductCategoriesSection/>
            <AboutSection />
            <WhatWeEnsure />
            <CounterSection/>
            <Hero/>
            <WhyChooseUsSection/>
            
        </div>
    );
};

export default Home;