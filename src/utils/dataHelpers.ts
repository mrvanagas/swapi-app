import { ID_REGULAR_EXP } from './constants'

const addIdToResult = (object): any => {
    const id = object.url.match(ID_REGULAR_EXP)[0]
    object.id = id;
    return object
}
  
export default addIdToResult;