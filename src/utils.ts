import { ErrorMessage } from "./interfaces"

export const instanceOfErrorMessage = (object: any): object is ErrorMessage => {
  return Object.keys(object).includes('resolution') // There should be a better way to do this
}
