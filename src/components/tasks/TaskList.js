import React, { Component } from "react";
export default class TaskList extends Component {   
    componentDidMount(){
        for(let i=0;i<1000;i++){document.write(" This Is My Swamp, Now")
    }
}
    render(){
        return (
            <div>
            <h1>Hello</h1>
            </div>
        )
    }
}