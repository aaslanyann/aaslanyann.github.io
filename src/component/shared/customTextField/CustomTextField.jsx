import {Component} from "react";
import {TextField} from "@mui/material";

class CustomTextField extends Component {

    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    render() {
        const { type, name, className, value } = this.props;
        return <TextField type={type} name={name} value={value} onChange={this.handleChange} className={className} label="Outlined" variant="outlined" />

    }
}

export default CustomTextField;