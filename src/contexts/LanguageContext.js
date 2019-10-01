// Contains all business logic and data and make it available to all other components
import React from 'react';
import LanguageSelector from '../components/LanguageSelector';

// Capital C required
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english' };

    // Give nested components the ability to change language
    onLanguageChange = (language) => {
        this.setState({ language });
    };

    // Value will be all the data and the ability to change that data
    render(){
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;