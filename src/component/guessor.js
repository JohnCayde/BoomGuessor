import React, { Component } from 'react'

export class guessor extends Component {
    
    guessorStyle = ()=>{
        return {
            margin: '50px'
        }
    }

    guessValue = (e) =>{
        e.preventDefault();
        let guessorContainer = document.getElementById('guessing');
        this.props.checkGuess(guessorContainer.value);
        guessorContainer.value = '';
    }
    
    render() {
        return (
            <div style={this.guessorStyle()}>
                <form>
                    <input type='text' placeholder='Try guess the Boom' name='guessing' id='guessing' />
                    <input type='submit' value='Submit' onClick={this.guessValue}/>
                </form>
            </div>
        )
    }
}

export default guessor
