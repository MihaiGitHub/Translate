import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Voorleggen'; 
    }

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                {/* Consumer component to get data out of context object 
                    Pass a child (argument) into the cosumer; The function will be called by the consumer
                    with the value that is inside the pipe; value is the current value inside the pipe */}
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    /* Pass function to color context and return entire block of JSX; All consumers need a () => as argument */
    render(){
        return (
        <ColorContext.Consumer>
            {color => this.renderButton(color)}
        </ColorContext.Consumer>
        );
    }
}

export default Button;