import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // No se puede usar React Query, SWR, axios, apollo, etc
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // Recuperar primeras 3 palabras de fact
        // const firstWord = fact.split(' ').slice(0, 3).join(' ')
        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
          // Recuperamos la 'url' directamente del objeto
          // .then(response => response.json())
          .then(response => {
            const { url } = response
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App Fetching de Gatos</h1>
      {/* renderizado condicional (&& abreviatura de if), si hay 'fact' lo muestra, sino no */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
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
