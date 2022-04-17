import { Component } from "react";
import * as React from 'react';
import {Alert, Stack} from "@mui/material";



export default class AlertMessage extends Component {
    render() {
        return(
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">You already have such a task</Alert>
            </Stack>
        )
    }
}