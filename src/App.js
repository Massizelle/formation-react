import './App.css';
// import { Header } from './Components/Header';
// import Service from './Components/Service';
// import Calculatrice from './Components/Calculatrice';
// import Child from './Components/Child';
// import { ProductDetail } from './Components/ProductDetail';
// import Compteur from './Components/Compteur';
// import { useState } from 'react';
import EffectExo  from './Components/EffectExo';

function App() {
  // const [color, setColor] = useState("red");
  // const product = {
  //   name: "Laptop",
  //   price: 233,
  //   description: "je suis un laptop top"};
  return (
    <div className="App">
      {/* <Header />
      <Service />
      <Calculatrice note1={12} note2={18} />
      <Child note1={12} note2={18} />
      <ProductDetail product={product} />
      <Compteur nom={"Amina"} setColor={setColor} />
      <h1 style={{ color }}> {color} </h1> */
      <EffectExo />
      }
      </div>
  );
}

export default App;
