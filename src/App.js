
import { BrowserRouter as Router } from "react-router-dom"
import Hero from "./Components/Hero/Index.js"
import {GlobalStyle} from "./GlobalStyle.js"
import Product from "./Components/Products/Index.js"
import {productData, productDataTwo} from "./Components/Products/data.js"
import Featured from "./Components/Feature/Index.js"
import Footer from "./Components/Footer/Index.js"

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Hero/>
        <Product heading='Escolha a sua favorita' data={productData}/>
        <Featured/>
        <Product heading='Temos também Sanduíches' data={productDataTwo}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
