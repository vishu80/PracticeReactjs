import React, { useState } from 'react'
import Buttons from './components/UI/Buttons';
import Card from './components/UI/Card';
import Errormodal from './components/UI/Errormodal';
import classes from './components/Users/Adduser.module.css'
export default function Addusers(props) {
    console.log(props);
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    function addUserHandler(event) {
        event.preventDefault();

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {

            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name'
            })
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Inavlid age',
                message: 'Please enter a valid age'
            })
            return;
        }
        console.log(enteredName, enteredAge);
        props.onAddUser(enteredName, enteredAge);

        setEnteredName('');
        setEnteredAge('');

    }

    const userNameChangeHandler = (event) => {
        setEnteredName(event.target.value);

    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandle = () => {
        setError(null);
    }
    return (
        <div>
            {error &&
                <Errormodal title={error.title} message={error.message} onConfirm={errorHandle} />
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredName} onChange={userNameChangeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' onChange={ageChangeHandler} value={enteredAge} />
                    {/* <Buttons type='submit'>Add User</Button> */}
                    <Buttons type='submit'>Add User</Buttons>
                </form>
            </Card>
        </div>

    )
}
