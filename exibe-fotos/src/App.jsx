import React from 'react'
import Busca from './Components/Busca'
import env from 'react-dotenv'
//import { createClient } from 'pexels'
import PexelsClient from './utils/PexelsClient'
import ListaImagens from './Components/ListaImagens'
import PexelsLogo from './Components/PexelsLogo'

class App  extends React.Component {
  pexelsClient = null

  state = {
    photos: []
  }

  componentDidMount () {
    // this.pexelsClient = createClient(env.PEXELS_KEY)
  }
  onBuscaRealizada = (termo) => {
    this.pexelsClient.get('/search', {
      params: {
        query: termo,
        per_page: 10
      }
    })
      .then((result) =>
        this.setState({ photos: result.data.photos })
      )
      .catch((error) => {
        console.error('Error fetching photos:', error)
      })
  }

  // onBuscaRealizada = (termo) => {
  //   this.pexelsClient.photos.search({ query: termo, per_page: 10 })
  //     .then((result) =>
  //       this.setState({ photos: result.photos })
  //     )
  //     .catch((error) => {
  //       console.error('Error fetching photos:', error)
  //     })
  //   }
  render () {
    console.log(env.PEXELS_KEY)
    return (
      <div className='grid justify-content-center align-items-center'>
        <div className='col-12'>
          <PexelsLogo/>
        </div>
        <div className='col-12 '>
  
          <h1 className='text-center'>Exibe uma lista de...</h1>
  
        </div>
        <div className='col-12 '>
  
          <Busca dica='buscar algo... ' />
          onBuscaRealizada={this.onBuscaRealizada}
        </div>
        <div className='col-12'>
          <ListaImagens photos={this.state.photos} />
        </div>
  
      </div>
    )
  }
}
export default App