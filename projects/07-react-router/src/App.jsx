import { lazy, Suspense } from 'react'
import './App.css'
import { Route } from './components/Route'
import { Router } from './components/Router'

const LazyAboutPage = lazy(() => import('./pages/About'))
const LazyHomePage = lazy(() => import('./pages/Home'))
const LazySearchPage = lazy(() => import('./pages/Search'))
const LazyPage404 = lazy(() => import('./pages/404'))

export const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: LazySearchPage
  }
]

function App () {
  return (
    <main>
      {/* <h1 style={{ fontSize: '60px', fontFamily: 'cursive' }}>React Router</h1> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} DefaultComponent={LazyPage404}>
          <Route path='/' Component={LazyHomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
