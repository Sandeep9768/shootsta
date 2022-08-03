import React, { useState } from "react"
import { ErrorMessage, ResponseType, Word } from "../interfaces"
import { callAPI } from "../services"
import { instanceOfErrorMessage } from "../utils"
import WordList from "./WordList"

const Main: React.FC = () => {
  const [words, setWords] = useState<Word[]>([])
  const [searchWord, setSearchWord] = useState<string>('')
  const [error, setError] = useState<ErrorMessage | null>()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response: ResponseType = await callAPI(searchWord)
    if (instanceOfErrorMessage(response)) {
      setWords([])
      setError(response as ErrorMessage)
      return
    }
      setWords(response as Word[])
    setError(null)
  }
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const newWord: string = event.currentTarget.value
    setSearchWord(newWord)
  }

  return (
    <>
    <h1 style={{margin:20}}>Search Text</h1>
      <form onSubmit={handleSubmit} className="input-group">
      
        <div style={{margin:20,width:"100%"}}>
       
        
         <input type="text" value={searchWord} onChange={handleChange} className="form-control" />
       
        <input type="submit" value="Submit" className="btn"/>
        </div>
      </form>
      {error && (<p className="error">{error?.message}</p>)}
      {words.length > 0 && <WordList words={words} />}
    </>
  )
}

export default Main