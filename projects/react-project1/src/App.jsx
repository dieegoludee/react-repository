import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App () {
  // const formatName = (userName) => `@${userName}`
  // const formattedUserName = (<span>@{userName}</span>)

  // const midudev = { isFollowing: true, userName: 'midudev' }
  // const pheralb = { isFollowing: false, userName: 'pheralb' }
  // le pasas como props {...const} aunque no es buena pratica ya que le puedes pasar informacion que no necesita

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Miguel Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hernández',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomás',
      isFollowing: false
    }
  ]

  /**
   * const { userName, name, isFollowing } = user
   * en vez de pasarle el user al map le pasamos los parámetros
   */

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              <strong>{name}</strong>
            </TwitterFollowCard>
          )
        })
      }
      <TwitterFollowCard isFollowing={false}>
        <strong>Usuario desconocido</strong>
      </TwitterFollowCard>
    </section>
  )
}

export default App
