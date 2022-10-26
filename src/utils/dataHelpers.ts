import { ID_REGULAR_EXP } from './constants'

export const getId = (string): string => {
    return string.match(ID_REGULAR_EXP)[0]
}

export const addIdToResult = (object): any => {
    const id = getId(object.url)
    object.id = id;
    return object
}
