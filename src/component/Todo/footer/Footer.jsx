import {Component} from "react";
import {Button} from "@mui/material";
import Counter from "../../shared/Counter/Counter";
import DeleteIcon from '@mui/icons-material/Delete';


export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Button variant="contained" disableElevation onClick={this.props.onClick}>Clear completed</Button>
                <Counter data={this.props.data}/>
                <Button variant="outlined" onClick={this.props.fetching}>Fetch Data</Button>
                <Button variant="outlined" startIcon={ <DeleteIcon />} onClick={this.props.clearAll}>Clear all</Button>
            </div>
        )
    }
}