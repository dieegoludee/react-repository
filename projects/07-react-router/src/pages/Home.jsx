import { Link } from '../components/Link'

function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página Home de ejemplo para crear un React Router desde cero</p>
      <Link to='/about'>Ir a sobre nosotros</Link>
    </>
  )
}

export default Home
