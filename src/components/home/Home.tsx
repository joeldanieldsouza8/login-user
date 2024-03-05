import Header from "../Header/Header";
import ProductivityList from "../Productivity/ProductivityList/ProductivityList";

import logo from "../../assets/images/moptro_logo/moptro_ logo.png";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Header logo={logo} />
      <ProductivityList />
      <Footer />
    </>
  );
}

export default Home;
