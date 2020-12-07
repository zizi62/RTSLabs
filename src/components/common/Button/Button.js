import React from 'react'
import style from './button.module.css'

export const Button = (props) => (
    <>
        <button className={style.button} {...props} />
    </>
)  
