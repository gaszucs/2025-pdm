import React, {useState} from 'react'
import {Card} from 'primereact/card'
import './Accordion.css'
import { useState } from 'react'

const Accordion = ({itens}) => {
    const [indiceAtivo, setIndiceAtivo] = useState(null)

    const itemClicado = (indice) => {
        setIndiceAtivo(indice)

    }

    const expressaoJSX = itens.map((item, indice) => {
        <Card key={indice} className="border-1 border-solid border-400 ">
            <div onClick={() => itemClicado(indice)} >
                <i className='pi pi-angle-down'></i>
                <h5 className='inline ml-3'>{item.titulo} </h5>
            </div>
            <p className='mt-3'>{item.conteudo}</p>
        </Card>
    })
  return (
    <div>
        {
            expressaoJSX
        }
    </div>
  )
}

export default Accordion