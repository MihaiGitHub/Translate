import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';

class App extends React.Component {
    state = {
        language: 'english'
    }

    // Define as an arrow function because it is a callback method that we are passing to onClick
    onLanguageChange = language => {
        this.setState({
            language
        });
    }

    render(){
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                
            <ColorContext.Provider value="red">
                {/* Communicate information from this component into the context object
                    Value to put inside context object; language */}
                <LanguageContext.Provider value={this.state.language}>
                    {/* UserCreate needs to know some info from the context object; language;
                        UserCreate needs to be wrapped with all context providers from where it needs data */}
                    <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
            </div>
        );
    }
}

export default App;