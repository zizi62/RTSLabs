import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getArticlesList } from '../../redux/articleReducer'
import { Article } from '../Article/Article'
import { Search } from '../Search/Search'
import { Loading } from '../common/Loading/Loading'

export const ArticlesPage = () => {

    const articles = useSelector((store) => store.articlesPage.articles)
    const isLoading = useSelector((store) => store.articlesPage.isLoading)
    const dispatch = useDispatch()

    const sendSearchText = (text) => dispatch(getArticlesList(text))

    return (
        <>
            <Search sendSearchText={sendSearchText} />
            <div>
                {isLoading? <Loading/> : null}
                {articles.map(article =>
                    <Article key={article.objectID} {...article} />
                )}
            </div>
        </>
    )
}
