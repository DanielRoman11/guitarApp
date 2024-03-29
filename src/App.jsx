import Header from "./components/Header";
import Guitar from "./components/Guitar";
import * as url from './data/db.json'
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [ data ] = useState(url.default);
  const [ cart, setCart ] = useState([]);
  const [ amount, setAmount ] = useState(0);
  const [ cantidad, setCantidad ] = useState([]);

  useEffect(()=>{
    setCart(cart)
  }, [cart]);

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        amount={amount}
        setAmount={setAmount}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
              {data.map((guitar) => (
                <Guitar
                  key={guitar.id}
                  guitar={guitar}
                  setCart={setCart}
                  cart={cart}
                  setAmount={setAmount}
                  amount={amount}
                  cantidad={cantidad}
                  setCantidad={setCantidad}
                  />
              ))}
            </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
    </>
  )
}

export default App