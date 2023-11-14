import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer, CART_ACTION_TYPES } from '../reducers/cart'

// 1. Crear el contextp
export const CartContext = createContext() // SOLO SE CREA UNA VEZ

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

  return { state, addToCart, removeFromCart, clearCart }
}

// 2. Crear el Provider
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      // 3. Definir el estado inicial
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >{children}
    </CartContext.Provider>
  )
}

// const addToCart = product => {
//   // Checkear si el producto está ya en el carrito
//   const productInCartIndex = cart.findIndex(item => item.id === product.id)

//   if (productInCartIndex >= 0) {
//     // si el producto está en el carrito se crea un nuevo carrito con el estructureClone
//     const newCart = structuredClone(cart)
//     // aqui incrementamos el numero del índice
//     newCart[productInCartIndex].quantity += 1
//     return setCart(newCart)
//   }

//   // Producto no está en el carrito
//   setCart(prevState => ([
//     ...prevState,
//     {
//       ...product,
//       quantity: 1
//     }
//   ]))
// }

// const removeFromCart = product => {
//   setCart(prevState => prevState.filter(item => item.id !== product.id))
// }

// const clearCart = () => {
//   setCart([])
// }

// Testeando que el reducer fuciona para añadir un producto al carrito
// expect(
//   reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })
// ).toEqual([{ id: 1, quantity: 1 }])
