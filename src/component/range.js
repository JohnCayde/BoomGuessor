
import React, { Component } from 'react'

export class range extends Component {

    

    render() {
        // console.log(this.props.rangeList)
        return (
            <div>
                <p>Enter nomber in the range of:</p>
                <p>{this.props.rangeList[0]} ~ {this.props.rangeList[1]}</p>
            </div>
        )
    }
}

export default range
