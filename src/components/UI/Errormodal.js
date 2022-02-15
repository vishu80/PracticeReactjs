import React from 'react'
import Card from './Card'
import Buttons from './Buttons'
import classes from './Error.module.css'
export default function Errormodal(props) {
    return (
        <div className={classes.center}>
            <div className={classes.backdrop} onClick={props.onConfirm}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h>{props.title}</h>
                    </header>
                    <div className={classes.content}>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <footer className={classes.actions}>
                        <Buttons onClick={props.onConfirm}>Okay</Buttons>
                    </footer>
                </Card>
            </div>
        </div>

    )
}
