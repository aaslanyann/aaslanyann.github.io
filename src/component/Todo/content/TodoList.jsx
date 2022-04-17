import {Component} from "react";
import Item from "./Item";

export default class TodoList extends Component {

    render() {
        const { list, onCompleted, onEdit, onDelete } = this.props;
        return (
            <ul>
                {
                    list.map((todo,index) => {
                        return (
                            <Item key={todo.id} todo={todo} onCompleted={onCompleted} index={index} onEdit={onEdit} onDelete={onDelete} />
                        )
                    } )
                }
            </ul>
        )
    }
}