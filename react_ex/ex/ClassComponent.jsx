import React, {Component} from 'react'

export default class ClassComponent extends Component {
    constructor(props){
    super(props)
    this.state = {value: props.initialValue}
    }
    sum(delta) {
        this.setState({value: this.state.value + delta})
    }

    
    render() {
      
        return(
            <div>
                <h2>{this.props.label}</h2>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)}><p>incrementar</p></button>
                <button onClick={() => this.sum(+1)}><p>decrementar</p></button>
            </div>
        )
    }
}