import sendRequest from '../utils/sendRequest';
import { addIdToResult, getId } from '../utils/dataHelpers';
import { CHARACTER_API_QUERY, CHARACTER_SEARCH_QUERY, API_PAGE_QUERY_ARG, FILM_API_QUERY } from '../utils/constants'

const generateSingleResourceGetter = (resourseName: string): any => {
  return async (id: string) => {
    const query = `${resourseName}/${id}`;
    const response = await sendRequest(`${query}`);
    return response;
  };
}

const getMultipleCharacters = async (query) => {
  const response = await sendRequest(`${query}`);
  const results = response.results.map(addIdToResult)
  return results;
}

export const getCharacter = generateSingleResourceGetter(CHARACTER_API_QUERY);

export const getFilm = generateSingleResourceGetter(FILM_API_QUERY);

export const getCharacters = async (page) => {
  const query = `${CHARACTER_API_QUERY}/${API_PAGE_QUERY_ARG}${page}`;
  const results = await getMultipleCharacters(query)
  return results
};

export const getSeachResults = async (input: string) => {
 const query = `${CHARACTER_SEARCH_QUERY}${input}`
 const results = await getMultipleCharacters(query)
 return results
}

export const getCharacterFilms = async (films: any) => {
  const filmsQuery = films.map((url) => {
    const filmId = getId(url)
    return getFilm(filmId);
  })
  
  const result = await Promise.all(filmsQuery);
  return result;
}