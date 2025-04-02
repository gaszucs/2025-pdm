import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      icone: null,
      data: null,
      mensagemDeErro: null
    }
  }

  obterestacao =(data,latitude)=>{
    const anoAtual = data.getFullYear()
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if(data >= d1 && data < d2){
      return estaNoSul ? 'Inverno' : 'Verão'
    }
    if(data >= d2 && data < d3){
      return estaNoSul ? 'Primavera' : 'Outono'
    }
    if(data >= d3 || data < d1){
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
    }
  }

  icones = {
    'Inverno': 'snowflake',
    'Primavera': 'flower',
    'Verão': 'umbrella-beach',
    'Outono': 'leaf',
  }

  obeterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = new Date()
        const estacao = position.coords.latitudethis.obterestacao(data, position.coords.latitude)
        const icone = this.icones[estacao]
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          icone: icone,
          data: data.toLocaleTimeString()
        })
      }, 
      (erro) => {
        this.setState({
          mensagemDeErro: 'Não foi possível obter a localização, tente novamente mais tarde.'
        })
      }
    )
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className=" col-sm-12 col-md-8 col-xxl-6">
            <div className="card">
              <div className="card-body">

                <div className="d-flex aling-items-center border rounded mb-2 p-5">
                  style ={{height: '12rem' }}
                  <i className={`fas fa-5x fa-${this.state.icone}`}></i>
                  <p className="w-75 ms-3 text-center fs-1">
                    {this.state.estacao}
                  </p>
                </div>
                <div>
                  <p>
                    {
                    this.state.latitude ?
                      `Coordenadas: ${this.state.latitude},
                       ${this.state.longitude}, 
                       ${this.state.data}` :
                       this.state.mensagemDeErro ?
                        `${this.state.mensagemDeErro}` :
                        'Clique no botão abaixo para obter a estação climática.'	
                    }
                  </p>
                </div>

                <button
                 onClick={this.obeterLocalizacao}
                 className="btn btn-outline-primary w-100 mt-2">
                  Qual a minha estação climática?
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default App