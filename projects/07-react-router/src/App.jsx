import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es la página Home de ejemplo para crear un React Router desde cero</p>
      <a href='/about'>Ir a sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--rq2k992d--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/uoztlt50jlvdsizrvyz8.png'
        width={350}
        height={250}
      />
      <p>Esta es la página About de ejemplo para crear un React Router desde cero</p>
      <a href='/'>Ir a home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <main>
      <h1>React Router</h1>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
