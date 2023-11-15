import { BUTTON, EVENTS } from '../utils/consts'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado para que el navegador nos avise de que ha cambiado la ruta
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTON.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegación con SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} /> // {...props} ya pasa children
}
