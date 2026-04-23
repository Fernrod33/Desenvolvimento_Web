import { useEffect, useState } from "react";

export default function App() {

  const [loading, setLoading] = useState(false);
  const [valorBTC, setValorBTC] = useState(null);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/json/last/BTC")
      .then(response => response.json())
      .then(json => setValorBTC(json.BTCBRL.bid))
      .catch(error => console.log(error))
  }, [loading]);

  return (
    <main>
      <h1>Olá, mundo!</h1>
      <p>Este é um exemplo de componente React.</p>
      <button onClick={() => setLoading(!loading)}>
        Trigar useEffect
      </button>
      <h3>Valor do BTC: {valorBTC}</h3>
    </main>
  );
}