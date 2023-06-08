import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import News from "./Routes/News";
import Upcoming from "./Routes/Upcoming";
import Products from "./Routes/products";
import Footer from "./components/footer";
import Errorpage from "./Errorpage";
import ProductDetails from "./products/ProductDetails";
// import Addproduct from "./components/addProduct"
function App() {
   return (
      <div className="App">

         <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductDetail/:id" element={<ProductDetails />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            {/* <Route path="/add" element={<Addproduct />} /> */}
            <Route path="*" element={<Errorpage />} />
         </Routes>
         <Footer />

      </div>

   );
} 

export default App;

