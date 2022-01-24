import React from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <ol key={'Conteudos'}>
          {conteudos.map((cont) => {
          return (
            <li>
              <span>O conteudo é: {cont.conteudo}</span><br />
              <span>Status: {cont.status}</span><br />
              <span>Bloco: {cont.bloco}</span>
            </li>
          )        
        })}
      </ol>
    )
  }
}

export default Content