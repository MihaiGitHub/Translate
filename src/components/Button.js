import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'Voorleggen'; 
    }

    render(){
        return (
            <button className="ui button primary">
                {/* Consumer component to get data out of context object 
                    Pass a child (argument) into the cosumer; The function will be called by the consumer
                    with the value that is inside the pipe; value is the current value inside the pipe */}
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;