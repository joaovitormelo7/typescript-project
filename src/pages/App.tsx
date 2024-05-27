import React, { useState } from 'react';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from  './App.module.scss';
import Cronometro from '../components/cronometro';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
