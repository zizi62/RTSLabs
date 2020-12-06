import React, { useState } from 'react'
import { Button } from '../common/Button/Button'
import { Input } from '../common/Input.js/Input'
import style from './search.module.css'

export const Search = (props) => {

    const { sendSearchText } = props

    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const setSearch = () => {
        if (text.length >= 3) {
            sendSearchText(text)
            setText('')
            setError('')

        } else {
            setError('Min 3 simbols')
        }
    }

    const setTextInput = (textInput) => {
        setText(textInput)
        setError('')
    }
    
    return (
        <div className = {style.search}>
            <Input value={text} setText={setTextInput} error={error} />
            <Button onClick={setSearch}>Search</Button>
        </div>

    )
}