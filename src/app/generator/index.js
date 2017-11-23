import React, {Component} from 'react';
import Display from './display';
import Options from './options';
import Code from './code';

class Generator extends Component {

    constructor(props){
        super();
        this.state = {
            options: {}
        }
    }

    onChange(field, text){
        const {options} = this.state;
        options[field] = text;
        this.setState({ options });
    }

    render (){

        return (

            <div className="Generator flex vertical">
                
                <div className="flex-1">
                    <Display
                        options={this.state.options} />
                </div>

                <div className="flex-1 flex horizontal">

                    <div className="flex-1">
                        <Options
                            options={this.state.options}
                            onChange={this.onChange.bind(this)} />
                    </div>

                    <div className="flex-1">
                        <Code
                            options={this.state.options} />
                    </div>

                </div>

            </div>
        
        );

    }

}

export default Generator;