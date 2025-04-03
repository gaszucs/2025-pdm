import React, { Component } from 'react'

export class estacaoClimatica extends Component {
    state = {
        data: null
    }

    timer = null

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ data: new Date().toLocaleTimeString })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">

                    <div className="d-flex aling-items-center border rounded mb-2 p-5">
                        style ={{ height: '12rem' }}
                        <i className={`fas fa-5x fa-${this.props.icone}`}></i>
                        <p className="w-75 ms-3 text-center fs-1">
                            {this.props.estacao}
                        </p>
                    </div>
                    <div>
                        <p>
                            {
                                this.props.latitude ?
                                    `Coordenadas: ${this.props.latitude},
                 ${this.props.longitude}, 
                 ${this.props.data}` :
                                    this.props.mensagemDeErro ?
                                        `${this.props.mensagemDeErro}` :
                                        'Clique no botão abaixo para obter a estação climática.'
                            }
                        </p>
                    </div>

                    <button
                        onClick={this.props.obeterLocalizacao}
                        className="btn btn-outline-primary w-100 mt-2">
                        Qual a minha estação climática?
                    </button>

                </div>
            </div>
        )
    }
}

export default estacaoClimatica