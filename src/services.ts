import { ErrorMessage, ResponseType } from "./interfaces"

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export const callAPI = async (word: String): Promise<ResponseType> => {
  try {
    return await fetch(`${BASE_URL}/${word}`).then(async (response) => {
      return response.json()
    })
  } catch (_) {
    const message: ErrorMessage = {
      message: 'API Error',
      resolution: 'API Error',
      title: 'API Error'
    }
    return message
  }
}
