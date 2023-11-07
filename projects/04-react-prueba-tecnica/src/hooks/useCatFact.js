import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    // No se puede usar React Query, SWR, axios, apollo, etc
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
