
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import db from './firebase';

//modal styles hook
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        width: 400,
        height: 100,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),

    }
}));


export function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);//modal state
    //modal show function
    const handleOpen = () => {
        setOpen(true);
    };
     //modal hide function
    const handleClose = () => {
        setOpen(false);
    };
    //function for deleteing todo from db
    const onDeleteHandler = () => {
        db.collection('todos').doc(props.id).delete()
        setOpen(false);
    };

    // modal body
    const body = (
        <div className={classes.paper} >
            <h2 id="simple-modal-title">Do you want to delete this todo?</h2>
            <Button color="secondary" onClick={onDeleteHandler}>Yes</Button>
        </div>
    );




    return (
        <div>
            { open ? <Modal
                open={handleOpen}
                onClose={handleClose}
            >
                {body}
            </Modal> : <List className="list">
                    <ListItem className="list-item">
                        <Checkbox
                            checked={props.done}
                            value={props.done}
                            onClick={event => db.collection('todos').doc(props.id).set({
                                text: props.text,
                                done: !props.done
                            })}
                        />
                        <ListItemText className={props.done ? "done" : "inprogress"}>{props.text}</ListItemText>
                        <Button className="hide" color="secondary" onClick={props.done ? onDeleteHandler : handleOpen}>X</Button>
                    </ListItem>
                </List>}
        </div>
    )
}

