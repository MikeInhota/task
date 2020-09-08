import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state = {
            title: "",
            description:""
        };
    }

    handleChangeTitle(event){
        this.setState({title: event.target.value})
    }

    handleChangedescription(event){
        this.setState({description: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.addTask(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="titulo"
                    onChange={this.handleChangeTitle.bind(this)}
                />
                <textarea
                    placeholder="descrição"
                    onChange={this.handleChangedescription.bind(this)}
                />
                <button>Salvar</button>
            </form>
         );
    }
}
 
export default Form;