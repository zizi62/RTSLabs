import React from 'react'
import style from './article.module.css'

export const Article = (props) => {

    const { title, author, url } = props

    return (
        <div className={style.article}>
            <div className={style.autor}>
              Autor: {author}
            </div>
            <p className={style.title}>{title}</p>
            <a href={url} target="_blank">Read</a>
        </div>
    )
}