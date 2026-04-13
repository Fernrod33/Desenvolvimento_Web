import Cabecalho from "./components/Cabecalho";

export default function App() {

const nome = "Fernando";

  return (
    <main>
      <Cabecalho texto={`Olá, ${nome}!`} />
    </main>
  )
}
