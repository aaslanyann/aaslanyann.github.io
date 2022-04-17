import {Component} from "react";
import {Button, Typography} from "@mui/material";
import CustomCheckbox from "../../shared/CustomCheckbox/CustomCheckbox";

export default class Item extends Component {
    render() {
        const { todo :{ title, id, completed }, onCompleted , index, onEdit,onDelete } = this.props;
        return (
            <li className="item">
                <CustomCheckbox isChecked={completed} onChange={onCompleted} index={index} />
                <Typography>{title}</Typography>
                <Button variant="contained" color="success" onClick={() => onEdit(id)}>Edit</Button>
                <Button variant="outlined" color="error" onClick={() => onDelete(id)}>Delete</Button>
            </li>
        )
    }
}