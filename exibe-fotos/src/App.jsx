import React from 'react'
import Busca from './Components/Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'

class App  extends React.Component {
  pexelsClient = null

  componentDidMount () {
    this.pexelsClient = createClient(env.PEXELS_KEY)
  }

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  render () {
    console.log(env.PEXELS_KEY)
    return (
      <div className='grid justify-content-center align-items-center'>
        <div className='col-12 '>
  
          <h1>Exibe uma lista de...</h1>
  
        </div>
        <div className='col-12 '>
  
          <Busca dica='buscar algo... ' />
          onBuscaRealizada={this.onBuscaRealizada}
        </div>
  
      </div>
    )
  }
}
export default App