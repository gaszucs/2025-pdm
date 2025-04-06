import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon} from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
        TermoDeBusca: ''
    }
    onTermoAlterado = (event) => {
        this.setState({ TermoDeBusca: event.target.value })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
    }
  render() {
    return (
        < form onSubmit={this.onFormSubmit}>
            <div
                className='flex flex-column'>
                <IconField iconPosition='left'>
                    <InputIcon className='pi pi-search'/>
                    <InputText
                    className='w-full' 
                    placeholder= {this.props.dica}
                    onChange={this.onTermoAlterado}
                    value={this.state.TermoDeBusca}/>
                    <Button label='OK' outlined/>
                </IconField>
            </div>
        </form>
    )
  }
}
Busca.defaultProps = {
    dica: 'Busque por uma imagem'
}
