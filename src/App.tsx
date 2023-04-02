import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Layout from "./components/Layout";
import AboutMe from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    isDesktop: width > 1023,
  };

  return (
    <Layout>
      <Header isDesktop={responsive.isDesktop} />
      <Profile />
      <AboutMe />
      <Interests />
      <Footer />
    </Layout>
  );
}

export default App;
