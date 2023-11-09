import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    /**
      * Para evitar una segunda búsqueda con el useRef recogemos
      * el valor anterior y si es igual al ser mutable y persiste en el render
      * no realiza una segunda búsqueda con el mismo valor
    */
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      // tanto en el try como en el catch
      setLoading(false)
    }
  }, [])

  // solo si cambia el sort o las peliculas se ejecuta el return
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading, error }

  // const getSortedMovies = () => {
  //   console.log('sorted movies')
  //   // para ordenar las peliculas alfabéticamente, hay que utilizar el
  //   // localCompare para que ignore las tildes ya que la á debe estar al lado de la a
  //   // sort (compara dos valores)
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies

  //   return sortedMovies
  // }
}

/* En este caso se utilizaria useCallback para simplificar la sintaxis */

// const getMovies = useMemo(() => {
//   return async ({ search }) => {
//     /**
//      * Para evitar una segunda búsqueda con el useRef recogemos
//      * el valor anterior y si es igual al ser mutable y persiste en el render
//      * no realiza una segunda búsqueda con el mismo valor
//      */
//     if (search === previousSearch.current) return

//     try {
//       setLoading(true)
//       setError(null)
//       previousSearch.current = search
//       const newMovies = await searchMovies({ search })
//       setMovies(newMovies)
//     } catch (e) {
//       setError(e.message)
//     } finally {
//       // tanto en el try como en el catch
//       setLoading(false)
//     }
//   }
// }, [])
