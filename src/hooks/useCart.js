import * as url from '../data/db.json'
import { useMemo } from 'react'
import { useEffect } from "react"
import { useState } from "react"

export default function useCart() {

  const initializeCart = () => {
    const cartData = localStorage.getItem('cart')
    return cartData ? JSON.parse(cartData) : []
  }
  
    const initializeCantidad = () => {
      const cantidadData = localStorage.getItem('cantidad')
      return cantidadData ? JSON.parse(cantidadData) : []
    }
  
    const [ data ] = useState(url.default);
    const [ cart, setCart ] = useState(initializeCart);
    const [ cantidad, setCantidad ] = useState(initializeCantidad);
    
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
      localStorage.setItem('cantidad', JSON.stringify(cantidad))
    }, [cart, cantidad])
    
    const MAX_TIMES = 5
    
    function addToCart(item) {
      const id = item.id;
  
      if(cart.find((item) => item.id === id) === undefined) {
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
  

    const itemsAdded = (id) => (cantidad.find((item) => item.id === id).times)
    const isCartEmpty = useMemo(() => cart.length === 0, [cart]);

  return {
    data,
    cart,
    addToCart,
    itemLessTimes,
    removeItem,
    flushCart,
    totalPrice,
    itemsAdded,
    isCartEmpty,
  }
}