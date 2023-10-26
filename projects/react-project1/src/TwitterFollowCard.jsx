import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = 'unknown', initialIsFollowing }) {
  /**
   * const imageSrc = `https://unavatar.io/${userName}`
   * src={imageSrc}
   * SE PUEDE HACER DE LAS 2 FORMAS CON LAS COMILLAS `...Y ${variable}`
   */
  // console.log(isFollowing)

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    // dependiendo de si esta siguiendo o no da la vuelta (como un interruptor)
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          {children}
          <span className='tw-followCard-infoUserName'>
            @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
