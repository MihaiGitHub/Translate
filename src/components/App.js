import React from 'react';

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
                <div>Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                {this.state.language}
            </div>
        );
    }
}

export default App;