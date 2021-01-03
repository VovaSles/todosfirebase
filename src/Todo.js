
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import db from './firebase';


export function Todo(props) {
    
    return (
        <div>
            <List className="list">
                <ListItem className="list-item">
                    <Checkbox 
                    checked={props.done}
                    value={props.done}
                    onChange={event => db.collection('todos').doc(props.id).set({
                        text: props.text,
                        done: !props.done
                        
                    })}
                    />
                    <ListItemText className={props.done? "done": "inprogress"}>{props.text}</ListItemText>
                    <Button className="item-button" variant="contained" color="secondary" onClick={event => db.collection('todos').doc(props.id).delete()} >X</Button>
                </ListItem>
                
              
            </List>
        </div>
    )
}

