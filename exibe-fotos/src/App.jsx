import React from 'react'

class App  extends React.Component {

  onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  render () {
    return (
      <div className='grid justify-content-center align-items-center'>
        <div className='col-12 '>
  
          <h1>Exibe uma lista de...</h1>
  
        </div>
        <div className='col-12 '>
  
          <Busca dica='buscar algo... ' />
        </div>
  
      </div>
    )
  }
}
export default App