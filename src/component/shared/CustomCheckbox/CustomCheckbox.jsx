import { Component } from "react";
import { FormControlLabel, Checkbox } from '@mui/material/';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default class CustomCheckbox extends Component {

    state = {
        checked: false
    }

    componentDidMount() {
        this.setState({
            checked: this.props.isChecked
        })
    }

    handleChange = (index) => {
        this.setState({
            checked: !this.state.checked
        })
        setTimeout(() => {
            this.props.onChange(index)
        })
    }

    render() {
        const { index } = this.props;

        return <input type="checkbox" checked={this.state.checked} onChange={() => this.handleChange(index)} />
    }
}