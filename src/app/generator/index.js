import React, {Component} from 'react';
import Display from './display';
import Options from './options';
import Code from './code';

class Generator extends Component {

    constructor(props){
        super();
        this.state = {
            options: {
                fontWeight: 300,
                fontColor: "#efefef",
                fontSize: 3,
                textAlign: 'center',
                backgroundColorInside: "#111111",
                backgroundColorOutside: "#222222",
                trasparencyInside: "ff",
                trasparencyOutside: "ff",

                paddingOutsideHorizontal: 10,
                paddingOutsideVertical: 10,
                paddingInsideHorizontal: 10,
                paddingInsideVertical: 10,

                date: new Date(new Date().getTime() + 15*24*60*60*1000),
                hours: 23,
                minutes: 59,
                seconds: 59
            }
        }
    }

    onChange(field, text){
        const {options} = this.state;
        if(field === 'date'){
            const data = text.split('-');
            options[field] = new Date( data[0], data[1]-1, data[2] );
        } else {
            options[field] = text;
        }        
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