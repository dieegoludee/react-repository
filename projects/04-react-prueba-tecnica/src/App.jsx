import { useEffect, useState } from 'react'
import './App.css'
import '../style.css'
import { getRandomFact, getRandomImage } from './services/facts'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  // const [factError, setFactError] = useState()

  // No se puede usar React Query, SWR, axios, apollo, etc
  // Para recuperar la cita al cargar la página
  useEffect(() => {
    getRandomFact()
      .then(newFact => setFact(newFact))
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    getRandomImage(fact)
      .then(newImage => setImageUrl(newImage))
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App Fetching de Gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {/* renderizado condicional (&& abreviatura de if), si hay 'fact' lo muestra, sino no */}
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
        {/* {factError && <p>{factError}</p>} */}
      </section>
    </main>
  )
}

// useEffect(() => {
//   async function getRandomFact () {
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//     const json = await res.json()
//     setFact(json.fact)
//   }

//   getRandomFact()
// }, [])
