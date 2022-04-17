import {Component} from "react";
import {Button} from "@mui/material";

class CustomButton extends Component {

    render() {
        const {variant = 'contained', onClick = () => {}, children = 'Button', type = 'button'} = this.props;
        return (
            <Button variant={variant} onClick={onClick} type={type}>{children}</Button>
        )
    }
}

export default CustomButton;