import './App.css';
import Calculatrice from './Components/Calculatrice';
import { Header } from './Components/Header';
import Service  from './Components/Service';
import Child from './Components/Child';
import {ProductDetail} from './Components/ProductDetail';
import Compteur from './Components/Compteur';



function App() {
const  product = {
  name :"Laptop",
  price:233,
  description:"je suis un laptop top"
}
  return (
    <div className="App">
      <p>Hello World</p>
      <Header/>
      <Service/>
      <Calculatrice note1={12} note2={18}/>
      <Child note1={12} note2={18}/>
      <ProductDetail product={product}/>
      <Compteur nom={"Amina"}/>
    </div>
  );
}

export default App;
