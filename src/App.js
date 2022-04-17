import {Component} from "react";
import Header from "./component/Todo/header/Header";
import TodoList from "./component/Todo/content/TodoList";
import {TextField} from "@mui/material";
import SharedDialog from "./component/shared/SharedDialog/SharedDialog";
import ProgressBar from "./component/shared/ProgressBar/ProgressBar";
import Footer from "./component/Todo/footer/Footer";
import AlertMessage from "./component/shared/AlertMessage/AlertMessage";




export default class App extends Component{
    state = {
        todos: [],
        isOpenModal: false,
        dialogType: null,
        idForEditAndDelete: 0,
        isLoad: false,
        searchText: '',
        openSnack: false
    }

    getFilteredTodos = () => {
        return this.state.todos.filter((todo) => todo.title.includes(this.state.searchText));
    }

    timeCounter = () => {
        setTimeout(() => {
            this.setState({
                openSnack: false
            })
        }, 3000)
    }


    addTodo = (todo) => {
        if(!(this.state.todos.find(item => item.title === todo.title))) {
            this.setState({
                todos: [todo, ...this.state.todos]
            })
            return;
        }
        this.setState({
            openSnack: true
        })
        this.timeCounter()
    }

    onCompleted = (index) => {
        const { todos } = this.state;
        todos[index].completed = !todos[index].completed;
        this.setState({});
    }

    onEdit = (id) => {
        this.setState({
            isOpenModal: true,
            dialogType: 'edit',
            idForEditAndDelete: id
        })
    }
    onDelete = (id) => {
        this.setState({
            isOpenModal: true,
            dialogType: 'delete',
            idForEditAndDelete: id
        })
    }

    onEditSave = (inputValue) => {
        const {todos,idForEditAndDelete} = this.state;
        const idx = todos.findIndex(item => item.id === idForEditAndDelete);
        todos[idx].title = inputValue;
        this.setState({todos: [...todos]})
    }

    onDeleteSave = () => {
        const {todos,idForEditAndDelete} = this.state;
        const idx = todos.findIndex(item => item.id === idForEditAndDelete);
        todos.splice(idx,1);
        this.setState({todos: [...todos]})
    }

    handleDialogClose = () => {
        this.setState({
            isOpenModal: false
        })
    }

    clearCompleted = () => {
        this.setState({
            todos: this.state.todos.filter(item => item.completed === false)
        })
    }

    fetching = () => {
        this.setState({
            isLoad: true
        })
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(stream => stream.json())
            .then(todos => {
                this.setState({
                    todos,
                    isLoad: false
                })
            })
    }

    handleSearchTextChange = (event) => this.setState({
        searchText: event.target.value
    })

    handleAlertClose = () => {
        this.setState({
            openSnack: false
        })
    }

    clearAll = () => {
        this.setState({
            todos: []
        })
    }


    render() {
        const todos = this.getFilteredTodos();
        return(
                <div className="app">
                    <div className="content">
                        {this.state.openSnack && <AlertMessage className="alertMessage" />}
                        <TextField type="text" className="todoInput inputForSearch" value={this.state.searchText} onChange={this.handleSearchTextChange} label="Search..." />
                        <Header addTodo={this.addTodo} />
                        <div className="list">
                            {
                                this.state.isLoad ?
                                    <ProgressBar /> :
                                    <TodoList list={todos} className="list"
                                              onCompleted={this.onCompleted}
                                              onEdit={this.onEdit} onDelete={this.onDelete}
                                              checkedToDos={this.checkedToDos}
                                    />
                            }
                        </div>
                        <Footer onClick={this.clearCompleted} fetching={this.fetching} clearAll={this.clearAll} data={todos}/>
                    </div>
                    {
                        this.state.isOpenModal && <SharedDialog open={this.state.isOpenModal} type={this.state.dialogType} onClose={this.handleDialogClose} onEditSave={this.onEditSave} onDeleteSave={this.onDeleteSave}/>
                    }
                </div>
        );
    }
};