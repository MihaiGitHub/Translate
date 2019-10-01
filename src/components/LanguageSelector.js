import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    // Using this.context approach since this component doesn't need to access any other context
    // Connect LanguageSelector to LanguageContext
    static contextType = LanguageContext;

    render(){ 
        console.log('66666',this.context)
        return (
            <div>Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
            </div>
        );
    }
}

export default LanguageSelector;