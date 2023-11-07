import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/facts'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    getRandomImage({ fact })
      .then(newImage => setImageUrl(newImage))
  }, [fact])

  return { imageUrl }
} // {imageUrl: 'https:// ...'}
