import React, { Component } from 'react';

const objToInlineStyle = (object) => {
    return JSON.stringify(object)
            .split(',').join(';')
            .split('"').join('') 
            .split('{').join('"') 
            .split('}').join('"');
}

class Code extends Component {

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
        const fontFamily = (options.fontFamily || "Helvetica");
        const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
        const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
        const backgroundColorInside =  (options.backgroundColorInside || "#d56");

        const wrapperStyle = {
            'text-align': textAlign,
            padding: paddingOutsideVertical + ' '+ paddingOutsideHorizontal,
            'background-color': backgroundColorOutside
        };
        const wrapperStyleString = (objToInlineStyle(wrapperStyle));

        const style = {
            'font-size': fontSize,
            'font-family': fontFamily,
            padding: paddingInsideVertical +' '+ paddingInsideHorizontal,
            'background-color': backgroundColorInside
        };
        const styleString = (objToInlineStyle(style));

        const content = (
                            startDay ? ( 
                                startDay > 9 ? startDay : '0'+startDay 
                            ): ''
                        )+
                        (
                            startHours ? ' : '+ ( 
                                startHours > 9 ? startHours : '0'+startHours 
                            ): ''
                        )+
                        (
                            startMinutes ? ' : '+ ( 
                                startMinutes > 9 ? startMinutes : '0'+startMinutes 
                            ): ''
                        )+
                        (
                            startSeconds ? ' : '+ ( 
                                startSeconds > 9 ? startSeconds : '0'+startSeconds 
                            ): ''
                        )+
                        (
                            startMilliseconds ? ' : '+ ( 
                                startMilliseconds > 9 ? startMilliseconds : '0'+startMilliseconds 
                            ): ''
                        );

        const string = ''+
        '<div>\n'+
        '\t<div style='+wrapperStyleString+'>\n'+
        '\t\t<span style='+styleString+'>\n'+
        '\t\t\t'+
        content+
        '\n'+
        '\t\t</span>\n'+
        '\t</div>\n'+
        '</div>';

        return (

            <div className="Code container">
                <h3>Code</h3>
                <hr />
                <textarea
                    className="textarea-code"
                    rows={15}
                    value={string}
                    disabled />
            </div>

        );

    }

}

export default Code;