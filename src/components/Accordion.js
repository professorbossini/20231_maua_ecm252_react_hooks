//rafce
import React, { useState } from 'react'
import { Card } from 'primereact/card'
import './Accordion.css'

const Accordion = ({itens}) => {
  const [indiceAtivo, setIndiceAtivo] = useState(0)
  const itemClicado = (indice) => {
    // errado!indiceAtivo = indice
    setIndiceAtivo(indice)
  }
  const expressaoJSX = itens.map((item, indice) => {
    const classExibirConteudo = indice === indiceAtivo ? '' : 'hidden'
    const classExibirIcone = indice === indiceAtivo ? 'pi-angle-down' : 'pi-angle-right'
    return(
      <Card id="accordion" key={indice} className='border-1 border-400'>
        <div onClick={() => itemClicado(indice)}>
          <i className={`pi ${classExibirIcone}`}></i>
          <h5 className="inline ml-3">{item.titulo}</h5>
        </div>
        <p className={classExibirConteudo}>{item.conteudo}</p>
      </Card>
    )
  })
  
  
  return <div>
    {expressaoJSX}
  </div>
  }
  
  // <div>
  //   {
  //     itens.map((item, indice) => {
  //       return <div key={indice}>
  //           <h4>{item.titulo}</h4>
  //           <p>{item.conteudo}</p>
  //       </div>
  //     })  
  //   }
  // </div>
export default Accordion