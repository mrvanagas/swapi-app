import sendRequest from '../utils/sendRequest';
import addIdToResult from '../utils/dataHelpers';
import { SWPeople } from '../Interfaces';
import { CHARACTER_API_QUERY, CHARACTER_SEARCH_QUERY } from '../utils/constants'


export const getCharacters = async (): Promise<SWPeople> => {
  const query = CHARACTER_API_QUERY;
  const response = await sendRequest(`${query}`);
  const results = response.results.map(addIdToResult)
  console.log(results)
  return results;
};

export const getCharacter = async (id: string): Promise<SWPeople> => {
  const query = `people/${id}`;
  console.log(query)
  const response = await sendRequest(`${query}`);
  return response;
};


export const getSeachResults = async (input: string) => {
 const query = `${CHARACTER_SEARCH_QUERY}${input}`
 const response = await sendRequest(`${query}`)
 const results = response.results.map(addIdToResult)
 return results
}