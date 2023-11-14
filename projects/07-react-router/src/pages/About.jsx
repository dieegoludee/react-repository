import { navigate } from '../Link'

function About () {
  return (
    <>
      <h1>About</h1>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--rq2k992d--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/uoztlt50jlvdsizrvyz8.png'
        width={350}
        height={250}
      />
      <p>Esta es la página About de ejemplo para crear un React Router desde cero</p>
      <button onClick={() => navigate('/')}>Ir a home</button>
    </>
  )
}

export default About
