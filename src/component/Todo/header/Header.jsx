import {Component} from "react";
import CustomTextField from "../../shared/customTextField/CustomTextField";
import CustomButton from "../../shared/customButton/CustomButton";
import {v4 as uuidv4} from "uuid";

export default class Header extends Component {
    state = {
        textFieldValue: '',
    }

    onTextFieldChange = (value) => {
        this.setState({
            textFieldValue: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { addTodo } =  this.props;
        const { textFieldValue } = this.state;

        if(textFieldValue.trim()) {
            addTodo({
                title: textFieldValue,
                completed: false,
                id: uuidv4()
            })
        } else {
            alert('Invalid input value');
        }
        this.setState({
            textFieldValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex', justifyContent: 'space-between'}}>
                <CustomTextField type="text" name="todoInput" className="todoInput" value={this.state.textFieldValue} onChange={this.onTextFieldChange} />
                <CustomButton type="submit">Add</CustomButton>
            </form>
        )
    }
}