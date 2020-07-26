import React, { Component } from 'react'

export class rDefault extends Component {

    defaultStyle = ()=>{
        return {
            display : this.props.restart ? 'block' : 'none'
        }
    }

    render() {
        return (
            <div style={this.defaultStyle()}>
                <button onClick={this.props.restore}>Restart</button>
            </div>
        )
    }
}

export default rDefault
