export const BASE_API_URL = 'https://swapi.dev/api/';
export const CHARACTER_SEARCH_QUERY = 'people/?search=';
export const CHARACTER_API_QUERY = 'people';
export const FILM_API_QUERY = 'films';
export const API_PAGE_QUERY_ARG = '?page='
export const ID_REGULAR_EXP = new RegExp("(\\d+)");
export const PAGINATED_API_URL =  `${BASE_API_URL}${CHARACTER_API_QUERY}/${API_PAGE_QUERY_ARG}`;
export const minCharacters = 3;
export const CHARACTER_DESC_PROPERTIES = [
    { 
        name: 'name',
        title: 'Name'

    }, 
    { 
        name: 'height',
        title: 'Height'
    },
    {
        name: 'mass',
        title: 'Weight'
    },
    {
        name: 'hair_color',
        title: 'Hair color'
    },
    {
        name: 'eye_color',
        title: 'Eye color'
    },
    {
        name: 'skin_color',
        title: 'Skin color'
    },
    {
        name: 'birth_year',
        title: 'Birth Year'
    },
    {
        name: 'gender',
        title: 'Gender'
    }
]
