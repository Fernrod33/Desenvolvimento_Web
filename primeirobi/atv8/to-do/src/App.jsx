import { useState } from 'react'
import './App.css'

export default function App() {
  const [novaTarefa, setNovaTarefa] = useState('')
  const [tarefas, setTarefas] = useState([])

  const atualizarNovaTarefa = (event) => {
    setNovaTarefa(event.target.value)
  }

  const adicionarTarefa = (event) => {
    event.preventDefault()

    const tarefa = novaTarefa.trim()
    if (!tarefa) return

    const novaTarefaObj = {
      id: Date.now(),
      text: tarefa,
    }

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefaObj])
    setNovaTarefa('')
  }

  const removerTarefa = (id) => {
    setTarefas((tarefasAnteriores) => 
      tarefasAnteriores.filter((tarefa) => tarefa.id !== id)
    )
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
              onChange={atualizarNovaTarefa}
            />
            <button type="submit">Adicionar Tarefa</button>
          </form>

          {tarefas.length > 0 && (
            <div className="listaTarefas">
              <ul>
                {tarefas.map((tarefa) => {
                  return (
                    <li key={tarefa.id}>
                      <label htmlFor={tarefa.id}>{tarefa.text}</label>
                      <button type="button" onClick={() => removerTarefa(tarefa.id)}>
                        Remover
                      </button>
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


