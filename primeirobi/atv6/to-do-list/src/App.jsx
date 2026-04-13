import { useState } from 'react'
import './App.css'

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const adicionarTarefa = (event) => {
    event.preventDefault()

    const tarefa = novaTarefa.trim()
    if (!tarefa) return

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, tarefa])
    setNovaTarefa('')
  }

  return (
    <>
      <div className="fundo">
        <header>
          <h1>To-Do List</h1>
        </header>
        <main>
          <form className="incluirTarefa" onSubmit={adicionarTarefa}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={novaTarefa}
              onChange={(event) => setNovaTarefa(event.target.value)}
            />
            <button type="submit">Adicionar Tarefa</button>
          </form>

          {tarefas.length > 0 && (
            <div className="listaTarefas">
              <ul>
                {tarefas.map((tarefa, indice) => {
                  const tarefaId = `tarefa-${indice}`

                  return (
                    <li key={tarefaId}>
                      <input type="checkbox" id={tarefaId} />
                      <label htmlFor={tarefaId}>{tarefa}</label>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </main>
      </div>
    </>
  )
}


