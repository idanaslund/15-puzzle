import React from 'react'
import Board from 'Board'
import Header from 'Header'
import { Container } from './styles'

export const App = () => {
  return (
   <main>
      <Header />
      <Container>
        <Board />
      </Container>
   </main>
  )
}
