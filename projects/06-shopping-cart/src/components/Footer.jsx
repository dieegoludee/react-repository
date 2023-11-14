import './Footer.css'
import logo from '../assets/react-footer.svg'

export function Footer () {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className='footer'>
      {/* {
        // Muestra el estado actual de los filtros
        JSON.stringify(filters, null, 2)
      }
      {
        // Muestra el estado actual del carrito
        JSON.stringify(cart, null, 2)
      } */}
      <h4>
        Prueba técnica de React
        <a href='https://github.com/dieegoludee'>
          <img
            style={{ marginLeft: '5px', marginRight: '5px' }}
            src={logo}
            width='30px'
            height='30px'
          />
        </a>
        <span>GitHub - dieegoludee</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}
