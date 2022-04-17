import {Component} from "react";
import {Button} from "@mui/material";

export default class Counter extends Component {
    render() {
        return (
            <span>
                <Button variant="outlined">{this.props.data.reduce((aggr,item) => item.completed? ++aggr: aggr,0)} / {this.props.data.length}</Button>
            </span>
        )
    }
}