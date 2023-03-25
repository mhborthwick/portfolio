import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Layout from "./components/Layout";

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
    </Layout>
  );
}

export default App;
