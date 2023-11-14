import { EVENTS } from './consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado para que el navegador nos avise de que ha cambiado la ruta
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
