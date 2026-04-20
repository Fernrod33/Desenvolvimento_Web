import { useState } from 'react';
import './App.css'
import Button from './components/Button';

export default function App() {

  const [contador, setContador] = useState(0);
  const produtos = [
    { id: 1, nome: 'Teclado Gamer - Black Widow', preco: 400 },
    { id: 2, nome: 'Memoria Ram Kingston - DDR5 16 gb', preco: 35000 },
  ];
  const [carregando, setCarregando] = useState(true);
  const [nomeProduto, setNomeProduto] = useState('');

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <main>
      <h2>Contador</h2>
      <p>{contador}</p>
      <Button funcao={incrementar} texto="Incrementar" />
      <h2>Produtos</h2>
      {carregando ?
        <h4>
          Carregando...
        </h4>
        :
        produtos.map((item) => (
          <div key={item.id}>
            <span>
              <p>Nome: {item.nome}</p>
            </span>
            <span>
              <p>Preço: R$ {item.preco}</p>
            </span>
          </div>
        ))
      }  
    </main>
  )
}