import React from 'react'
import classes from './Button.module.css'

export default function Buttons(props) {
  return (
        <button className={classes.button} type={props.type} onClick={props.onClick}>

          {props.children}
        </button>
    )
}
  