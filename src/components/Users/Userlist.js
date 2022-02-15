import React from 'react';
import Card from '../UI/Card';
import classes from './userlist.module.css';

export default function Userlist(props) {
  return (

    <Card className={classes.userlist}>
      <ul>
        {
          props.userlist.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            )
          })
        }
      </ul>
    </Card>
  )
}
