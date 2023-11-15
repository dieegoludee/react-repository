import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola, estoy creando un clon de React Router',
    button: 'Ir a la Home'
  },
  en: {
    title: 'About us',
    description: 'Hi, I am creating a clone of React Router',
    button: 'Go to Home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

function About ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')

  return (
    <>
      <h1>{i18n.title}</h1>
      <img
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--rq2k992d--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/uoztlt50jlvdsizrvyz8.png'
        width={350}
        height={250}
      />
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}

export default About
