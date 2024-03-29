import Header from "./components/Header";
import Guitar from "./components/Guitar";
import * as url from './data/db.json'
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [ data ] = useState(url.default);
  const [ cart, setCart ] = useState([]);
  const [ cantidad, setCantidad ] = useState([]);

  const MAX_TIMES = 5
  const isCartEmpty = useMemo(() => cart.length === 0, [cart])

  function addToCart(item) {
    const id = item.id;   

    if(!cart.includes(item)) {
      setCart([...cart, item]);
      setCantidad([...cantidad, {id, times: 1}]);
    } else {
      const cantidadCopy = [...cantidad];
      const thisTimes = cantidadCopy.find((item) => item.id === id);
      
      if(thisTimes.times < MAX_TIMES){
        thisTimes.times += 1;
        setCantidad([...cantidadCopy]);
      }
    }
  }

  const itemLessTimes = (id) => {
    const cantidadCopy = [...cantidad]
    const thisTimes = cantidadCopy.find((item) => item.id === id)

    if(thisTimes.times > 1){
        thisTimes.times -= 1
        setCantidad([...cantidadCopy])
    }
  }

  const removeItem = (id) => {
    const thisItem = cart.find((item) => item.id === id)

    setCart(cart.filter((item) => item !== thisItem))
    setCantidad(cantidad.filter((item) => item.id !== id))
  };

  const flushCart = () => { setCart([]); setCantidad([]) };

  const totalPrice = useMemo(
    () => cart.reduce((totalAcc, item) => {
        const thisQuantity = cantidad.find((i) => i.id == item.id)

        return totalAcc + (item.price * thisQuantity.times)
    }, 0), [cart, cantidad])

  return (
    <>
      <Header
        cart={cart}
        setCart={setCart}
        cantidad={cantidad}
        setCantidad={setCantidad}
        addToCart={addToCart}
        itemLessTimes={itemLessTimes}
        removeItem={removeItem}
        isCartEmpty={isCartEmpty}
        flushCart={flushCart}
        totalPrice={totalPrice}
      />
      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>
            <div className="row mt-5">
              {data.map((guitar) => (
                <Guitar
                  key={guitar.id}
                  guitar={guitar}
                  addToCart={addToCart}
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