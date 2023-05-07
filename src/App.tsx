import { useEffect, useState } from "react";
import {
  AboutMe,
  Footer,
  Header,
  Interests,
  Layout,
  Profile,
} from "./components";

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
