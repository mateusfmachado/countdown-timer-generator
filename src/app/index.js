import React, {Component} from 'react';
import Menu from '../partials/menu';
import Footer from '../partials/footer';
import Generator from './generator';

class App extends Component {

    render () {

        return (
            <div className="App">
                <Menu />

                <Generator />

                <Footer />
            </div>        
        );

    }

}

export default App;