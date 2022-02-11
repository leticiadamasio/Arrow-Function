import React,{Component} from 'react'

//Crie uma arrow function que receba uma mensagem e exiba na tela
class App extends Component {
  mensagem = () => {
    return "Estou exibindo uma mensagem no console"  
}

//Crie uma arrow function que retorne o dobro de um número e exiba na tela
double = (number) => {
  return number * 2
}
  render() {
    return (
    <div>
     <h2>{this.mensagem()}</h2>
     <h2>O dobro do número é: {this.double(9)}</h2>
    </div>
    )
  }
}
export default App

