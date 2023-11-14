import { navigate } from '../Link'

function Home () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página Home de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/about')}>Ir a sobre nosotros</button>
    </>
  )
}

export default Home
