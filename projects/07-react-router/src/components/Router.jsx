import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import { useState, useEffect } from 'react'
import { EVENTS } from '../consts'
import Page404 from '../pages/404'
import { match } from 'path-to-regexp'
import SearchPage from '../pages/Search'

export const appRoutes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

export function Router ({ routes = [], DefaultComponent = () => <Page404 /> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    /**
     * Hemos usado path-to-regexp
     * para poder detectar rutas dinámicas como por ejemplo
     * /search/:query <- :query es una ruta dinámica
     */
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    /**
     * Guardar los parámetros de la url que eran dinámicos
     * y que hemos extraido con path-to-regexp
     * por ejemplo, si la ruta es /search/:query
     * y la url es /search/javascript
     * matched.params.query === 'javascript'
     */
    routeParams = matched.params // {query: 'javascript} // /search/javascript
    return true
  })?.Component

  return Page
    ? <Page routeParams={routeParams} />
    : <DefaultComponent routeParams={routeParams} />
}
