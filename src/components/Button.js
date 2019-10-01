import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(language){
        return language === 'english' ? 'Submit' : 'Voorleggen'; 
    }

    renderButton(color){
        return (
            <button className={`ui button ${color}`}>
                {/* Consumer component to get data out of context object 
                    Pass a child (argument) into the cosumer; The function will be called by the consumer
                    with the value that is inside the pipe; value is the current value inside the pipe;
                    Pull off language from context object */}
                <LanguageContext.Consumer>
                    {({ language }) => this.renderSubmit(language)}
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