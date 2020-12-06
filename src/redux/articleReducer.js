import { searchApi } from '../api/searchApi'

const SET_SEARCH_DATA = 'searchReducer/SET_SEARCH_DATA'
const SET_ERROR = 'searchReducer/SET_ERROR'
const SET_LOADING = 'searchReducer/SET_LOADING'


const initialState = {
    articles: [],
    error: '',
    isLoading: false
}

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_DATA:
            return {
                ...state,
                articles: action.articles
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

const setArticles = (articles) => ({ type: SET_SEARCH_DATA, articles })
const setError = (errorMessage) => ({ type: SET_ERROR, errorMessage })
const setLoading = (isLoading) => ({ type: SET_LOADING, isLoading })

export const getArticlesList = (text) => async (dispath) => {

    dispath(setLoading(true))

    try {
        let response = await searchApi.getArticle(text)
        dispath(setArticles(response))
    } catch (error) {
        dispath(setError('Some error'))
    }

    dispath(setLoading(false))
}