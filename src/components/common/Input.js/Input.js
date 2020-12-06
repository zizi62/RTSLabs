import React from 'react'
import style from './input.module.css'



export const Input = (props) => {

    const { error, value, setText } = props

    const setinputText = (e) => setText(e.currentTarget.value)

    return (
        <div className={style.inputBlock} >
            <input
                className={style.input}
                onChange={setinputText}
                value={value}
                type='text' />
            {error ? <p className={ style.error }>{error}</p> : null}
        </div>
    )
}