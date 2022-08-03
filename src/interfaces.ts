export type ResponseType = Word[] | ErrorMessage | Error

export interface Definition {
  definition: string,
  example: string,
}
export interface Meaning {
  partOfSpeech: string,
  definitions: Definition[]
}

export interface Word {
  word: string,
  phonetic: string,
  origin: string,
  meanings: Meaning[]
}

export interface ErrorMessage {
  message: string,
  resolution: string,
  title: string,
}
