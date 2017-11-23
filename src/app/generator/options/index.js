import React, { Component } from 'react';

class Options extends Component {

    render () {

        const {options} = this.props;

         // TIMER

         const startDay = options.startDay || 15;
         const startHours = options.startHours || 23;
         const startMinutes = options.startMinutes || 59;
         const startSeconds = options.startSeconds || 59;
         const startMilliseconds = options.startMilliseconds || false;
 
         // OUTSIDE DIV STYLE
 
         const textAlign = options.textAlign || 'center';        
         const paddingOutsideVertical = (options.paddingOutsideVertical || 10) + 'px';
         const paddingOutsideHorizontal = (options.paddingOutsideHorizontal || 10) + 'px';
         const backgroundColorOutside =  (options.backgroundColorOutside || "#d12");
 
         // TEXT STYLE
 
         const fontSize = (options.fontSize || 1.5)+'em';
         const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
         const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
         const backgroundColorInside =  (options.backgroundColorInside || "#d56");
         const fontFamily = ( options.fontFamily || 'Helvetica');

        return (

            <div className="Options container">
                <h3>Options</h3>
                <hr />
                
                <h4>Text Align</h4>
                <select
                    onChange={ (ev) => this.props.onChange('textAlign',ev.target.value) }
                    value={textAlign} >
                   { ['left','center','right'].map((text) => (
                        <option key={text} value={text}>{text}</option>
                    )) }
                </select>

            </div>

        );

    }

}

export default Options;