import React, { Component } from 'react'

export class alertmsg extends Component {

    getStyle = ()=>{
        return {
            display : this.props.alert.status ? 'block' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.alert.msg}
            </div>
        )
    }
}

export default alertmsg
