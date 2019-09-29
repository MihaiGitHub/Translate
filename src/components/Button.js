import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    // Define contextType using the context object; Name needs to be contextType
    static contextType = LanguageContext;

    render(){
        console.log(this.context)
        return <button className="ui button primary">Submit</button>;
    }
}

export default Button;