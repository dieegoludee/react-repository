import './App.css'
import '../style.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// import { Otro } from './components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App Fetching de Gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {/* renderizado condicional (&& abreviatura de if), si hay 'fact' lo muestra, sino no */}
        {fact ? <p>{fact}</p> : <span><strong>Cargando fact...</strong></span>}
        {imageUrl
          ? <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />
          : <span><strong>Cargando imagen...</strong></span>}
        {/* {factError && <p>{factError}</p>} */}

        {/* <Otro /> */}
      </section>
    </main>
  )
}
