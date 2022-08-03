import { Word } from "../interfaces"

type WordListType = {
  words: Word[]
}

const WordList: React.FC<WordListType> = ({ words }) => {
  return (
    <div style={{margin:"20px"}}>
      {words.map(({ word, meanings }, index) => {
        return (
          <div key={index} className="wordContainer">
           <h4> Word Number {++index} : {word}</h4>
            <ul>
              {meanings.map(({ definitions }) => definitions.map(({ definition }) => <li>{definition}</li>))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default WordList