import { Header } from "./Header";
import { Separator } from "./Separator";
import { Tweet } from "./Tweet";
import './Status.css';
import { FormEvent, KeyboardEvent, useState } from "react";

export function Status(){
const [newAnswer, setNewAnswer] = useState('')
const [answers, setAnswers] =  useState( ['Concordo','Não conrdo nem discordo','Ahhh entendi'])

function createNewAnswer(event:FormEvent){
  event.preventDefault()
  setAnswers([newAnswer,...answers]) 
  setNewAnswer('')
}

function handleHotKeySubmit(event: KeyboardEvent){
if(event.key === 'Enter' && event.ctrlKey || event.metaKey)//mac
event.preventDefault()
setAnswers([newAnswer,...answers]) 
setNewAnswer('')
}
    return (
        <main className="status">
        <Header title='Tweet'/>
        <Tweet content="Não mesmo.."/>
        <Separator/>

        <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/leandromendes25.png" alt="Leandro Mendes" />
          <textarea id="tweet" 
          value={newAnswer}
          onKeyDown={handleHotKeySubmit}
          onChange={(event) => {
            setNewAnswer(event.target.value)
          }} placeholder="Tweet your answer"/>
        </label>
        <button type='submit'>Answer</button>
        </form>

{answers.map(answer =>{
  return <Tweet key={answer} content={answer}/>;
}
  )}          
      </main>
    )
}