import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import striptags from 'striptags' 
const Busca = () => {
  const [termoDeBusca, setTermoDeBusca] = useState('React')
  const [resultados, setResultados] = useState([])
  console.log(resultados)
  useEffect(() => {
    const fazBusca = async () => {
      const { data } = await axios.get(
        'https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            format: 'json',
            origin: '*',
            srsearch: termoDeBusca  
          }
        }
      )
      setResultados(data.query.search)
    }
    if(termoDeBusca)
      fazBusca()
  }, [termoDeBusca])

  return (
    <div>
      {/* span.p-input-icon-left>i.pi.pi-search */}
      <span className="p-input-icon-left">
        <i className="pi pi-search"></i>
        <InputText 
          onChange={(e) => setTermoDeBusca(e.target.value)}
        />
      </span>
      {
        resultados.map(resultado =>(
          <div 
            key={resultado.pageid}
            className='my-2 border border-1 border-400'>
            <div
              className='border-bottom border border-1 border-400 p-2 text-center font-bold'>
              {resultado.title}
              <span>
                <Button 
                  icon="pi pi-send"
                  className='ml-2 p-button-rounded p-button-secondary'
                  onClick={() => window.open(
                    `https:/en.wikipedia.org?curid=${resultado.pageid}`
                  )}
                />
              </span>
            </div>
            <div className="p-2">
              {/* {striptags(resultado.snippet)} */}
              <span dangerouslySetInnerHTML={{__html: resultado.snippet}}></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Busca