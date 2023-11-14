import './App.css'
import { Router, appRoutes } from './components/Router'

function App () {
  return (
    <main>
      {/* <h1 style={{ fontSize: '60px', fontFamily: 'cursive' }}>React Router</h1> */}
      <Router routes={appRoutes} />
    </main>
  )
}

export default App
