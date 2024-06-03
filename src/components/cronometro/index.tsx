import Botao from "../button";
import Relogio from "./relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTask: () => void
}

export default function Cronometro({ selecionado, finalizarTask }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]) 

    function contagemRegressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return contagemRegressiva(contador - 1);
            }
            finalizarTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo} />
        </div>
            <Botao onClick={() => contagemRegressiva(tempo)}>
                Começar!  
            </Botao>    
        </div>
    )
}