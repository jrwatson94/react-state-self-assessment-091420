import React from 'react'

export default class Statement extends React.Component {
    state = {
        clickedStatement: this.props.noStatement,
        clickedImg: this.props.noImage
    }
    displayStatement = () => {
        if (this.state.clickedStatement=== this.props.noStatement){
            this.setState({clickedStatement: this.props.yesStatement})
            this.setState({clickedImg: this.props.yesImage})
        }else{
            this.setState({clickedStatement: this.props.noStatement})
            this.setState({clickedImg: this.props.noImage})
        }
    }
    render(){
    return(
        <div class="app">
            <div class="display">
                <h1>{this.state.clickedStatement}</h1>
                <img src={this.state.clickedImg} onClick= {this.displayStatement}></img>
            </div>
        </div>
    ) 
    
    }
}