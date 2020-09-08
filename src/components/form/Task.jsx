import React, { Component } from 'react'

export default class Task extends Component{

    render(props){
        return(

            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <a href="/task/delete">apagar</a>
            </div>

        )
    }
}