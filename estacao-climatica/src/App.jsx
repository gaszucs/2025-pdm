import React from 'react'
import estacaoClimatica from './estacaoClimatica'
import loading from './loading'

class App extends React.Component {
  //constructor(props) {
  //  super(props)
  //  this.state = {
  //    latitude: null,
  //    longitude: null,
  //    estacao: null,
  //    icone: null,
  //    data: null,
  //    mensagemDeErro: null
  //  }
  //  console.log('construtor')
  //}
  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    icone: null,
    data: null,
    mensagemDeErro: null
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.obeterLocalizacao()
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
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
    if(data >= d3 || data < d4){
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
    console.log('render')
    return (
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className=" col-sm-12 col-md-8 col-xxl-6">
            <div className="d-flex align-items-center wh-100">

              {
                (!this.state.latitude && !this.state.mensagemDeErro) ?
                  <loading
                  mensagem="Por favor responda à solicitação de localização" />
                :
                  this.state.mensagemDeErro ?
                    <p className="border rounded p-2 fs-1 text-center w-100">
                      É necessário permitir o acesso à localização para obter a estação climática.
                    </p>
                    
                    :
                    <estacaoClimatica
                      icone={this.state.icone}
                      estacao={this.state.estacao}
                      latitude={this.state.latitude}
                      longitude={this.state.longitude}
                      data={this.state.data}
                      mensagemDeErro={this.state.mensagemDeErro}
                      obterLocalizacao={this.obeterLocalizacao}
                    />
              }
            </div>

          </div>
        </div>
      </div>
    )
  } 
}

export default App