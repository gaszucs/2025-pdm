import React from 'react'
import Accordion from './components/Accordion'

const itens = [
  {
    titulo: 'Java',
    conteudo: 'Linguagem de programação orientada a objetos',
  },
  {
    titulo: ' Python',
    conteudo: 'Linguagem de programação de alto nível',
  },
  {
    titulo: 'JavaScript',
    conteudo: 'Linguagem de programação para desenvolvimento web',
  },
]

const App = () => {
  return (
    <div>
      <Accordion itens ={itens} />
    </div>
  )
}

export default App