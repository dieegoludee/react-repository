const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}

export const getRandomImage = async ({ fact }) => {
  if (!fact) return
  // Recuperar primeras 3 palabras de fact
  // const firstWord = fact.split(' ').slice(0, 3).join(' ')
  const threeFirstWord = fact.split(' ', 3).join(' ')
  const response = await fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red`)
  const { url } = response
  return url
}
