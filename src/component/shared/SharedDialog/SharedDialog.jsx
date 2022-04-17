import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Component} from "react";

function getDialogOptions(dialogType) {
    const dialogOptions = {
        edit: {
            dialogContextText: "Do you want edit?",
            textField: true,
            btnText: "Save",
            dialogTitle: "Edit",
        },
        delete: {
            dialogContextText: "Do you want Delete?",
            textField: false,
            btnText: "Yes",
            dialogTitle: "Delete"
        }
    }

    return dialogOptions[dialogType];
}

export default class SharedDialog extends Component {
    state = {
        editValue: ""
    }

    handleClose = () => {
        this.props.onClose();
    };

    changeTextField = (evt) => {
        this.setState({
            editValue: evt.target.value
        })
    }


    render() {
        const {dialogContextText, textField, btnText,dialogTitle } = getDialogOptions(this.props.type);
        return (
            <div>
                <Dialog open={true} onClose={this.handleClose} fullWidth={true}>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {dialogContextText}
                        </DialogContentText>
                        {textField && <TextField
                            onChange={this.changeTextField}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter value"
                            type="text"
                            fullWidth
                            variant="standard"
                        />}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={() => {
                            this.handleClose();
                            dialogTitle === "Edit" ? this.props.onEditSave(this.state.editValue) : this.props.onDeleteSave()
                        }}>{btnText}</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}