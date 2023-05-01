import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Timeline.css';
export function Timeline(){
const [newTweet, setNewTweet] = useState('')
const [tweets, setTweets] =  useState( ['Gek','Hello','teste'])

function createNewTweet(event:FormEvent){
  event.preventDefault()
  setTweets([...tweets,newTweet]) 
  setNewTweet('')
}
function handleHotKeySubmit(event: KeyboardEvent){
  if(event.key === 'Enter' && event.ctrlKey || event.metaKey)//mac
  event.preventDefault()
  setTweets([newTweet,...tweets]) 
  setNewTweet('')
  }
  
    return(
        <main className="timeline">
        <Header title='Home'/>
        <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/leandromendes25.png" alt="Leandro Mendes" />
          <textarea id="tweet" value={newTweet} onChange={(event) => {
           setNewTweet(event.target.value) 
            }} onKeyDown={handleHotKeySubmit} placeholder="What's happening?"/>
        </label>
        <button type='submit'>Tweet</button>
        </form>
        <Separator/>

{tweets.map(tweet =>{
  return <Tweet key={tweet} content={tweet}/>;
}
  )}          
      </main>
    )
}