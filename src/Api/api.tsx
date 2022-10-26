import sendRequest from '../utils/sendRequest';
import addIdToResult from '../utils/dataHelpers';
import { SWPeople } from '../Interfaces';
import { CHARACTER_API_QUERY, CHARACTER_SEARCH_QUERY } from '../utils/constants'
import axios from 'axios';


export const getCharacters = async (page): Promise<SWPeople> => {
  const query = `${CHARACTER_API_QUERY}${page}`;
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

export const getFilmInfo = async (url: string) => {
  const response = await axios.get(url)
  const data = response.data
  return {
    title: data.title,
    release_date: data.release_date
  }
}