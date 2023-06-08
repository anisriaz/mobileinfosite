import Navbar from "../components/Navbar"
import Contact from "../Routes/Contact"
import Products from "./products";


function Home() {
  return (
    <>    <Navbar /> 
      {/* <Hero cName="Mobile" title="Chose your Mobile" buttonText="Search Brand" url="/" btnClass="Show" /> */}
<Products />
<Contact/>

    </>
  );
}

export default Home;

