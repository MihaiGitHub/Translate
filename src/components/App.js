import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from '../components/LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';

class App extends React.Component {

    render(){
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />

                    <ColorContext.Provider value="red">
                        {/* Communicate information from this component into the context object
                            Value to put inside context object; language */}
                            <UserCreate />
                    </ColorContext.Provider>

                </LanguageStore>
            </div>
        );
    }
}

export default App;