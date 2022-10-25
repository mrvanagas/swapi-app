import sendRequest from '../utils/sendRequest';
import addIdToResult from '../utils/dataHelpers';
import { SWPeople } from '../Interfaces';
import { CHARACTER_API_QUERY } from '../utils/constants'


export const getCharacters = async (): Promise<SWPeople> => {
  const query = CHARACTER_API_QUERY;
  const response = await sendRequest(`${query}`);
  const results = response.results.map(addIdToResult)
  return results;
};

export const getCharacter = async (id): Promise<SWPeople> => {
  const query = `${CHARACTER_API_QUERY}/${id}`;
  const response = await sendRequest(`${query}`);
  return response;
};

