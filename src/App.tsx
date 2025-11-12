// import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  // useLocation,
} from "react-router-dom";
import CountdownTimer from "./components/Common/CountdownTimer";
// import usePageLoader from "./Hooks/usePageLoader";
// import ScrollToTopOnRouteChange from "./components/Common/ScrollToTopOnRouteChange";
// import PageLoader from "./components/Common/PageLoader";
// import BackToTop from "./components/Common/BackToTop";
// import Footer from "./components/Layout/Footer";
// import NotFound from "./components/Common/NotFound";
// import Navbar from "./components/Layout/Navbar";
// import Home from "./components/Home/Home";
// import Contact from "./pages/Contact/Contact";
// import AllProducts from "./pages/ProductsPage/AllProducts";
// import About from "./pages/About/About";

const AppContent = () => {
  // const location = useLocation();
  // const { isLoading } = usePageLoader();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
         <Routes >
              <Route path="/" element={<CountdownTimer />} />
         </Routes>
      {/* <ScrollToTopOnRouteChange />  
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader key="loader" />}
      </AnimatePresence>

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <BackToTop /> */}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
