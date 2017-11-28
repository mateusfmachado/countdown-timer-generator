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

        const date = new Date(options.date);
        const hours = options.hours || 23;
        const minutes = options.minutes || 59;
        const seconds = options.seconds || 59;

        // OUTSIDE DIV STYLE

        const textAlign = options.textAlign || 'center';        
        const paddingOutsideVertical = (options.paddingOutsideVertical || 10) + 'px';
        const paddingOutsideHorizontal = (options.paddingOutsideHorizontal || 10) + 'px';
        const backgroundColorOutside =  (options.backgroundColorOutside || "#d12");

        // TEXT STYLE

        const fontSize = (options.fontSize || 1.5)+'em';
        const fontFamily = (options.fontFamily || "Helvetica");
        const fontWeight = (options.fontWeight || 200);
        const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
        const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
        const backgroundColorInside =  (options.backgroundColorInside || "#d56");
        const fontColor = ( options.fontColor || "#111111");

        const wrapperStyle = {
            'text-align': textAlign,
            padding: paddingOutsideVertical + ' '+ paddingOutsideHorizontal,
            'background-color': backgroundColorOutside
        };
        const wrapperStyleString = (objToInlineStyle(wrapperStyle));

        const style = {
            'font-size': fontSize,
            'color': fontColor,
            'font-weight': fontWeight,
            'font-family': fontFamily,
            padding: paddingInsideVertical +' '+ paddingInsideHorizontal,
            'background-color': backgroundColorInside
        };
        const styleString = (objToInlineStyle(style));

        const dataFinal = new Date( date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes, seconds );
        // const today = new Date();

        // const timeDiff = dataFinal.getTime() - today.getTime();

        const string = ''+
        '<div>\n'+
        '\t<div style='+wrapperStyleString+'>\n'+
        '\t\t<span style='+styleString+' id="countdown">\n'+
        '\t\t\t'+
        '-- : -- : -- : --'+
        '\n'+
        '\t\t</span>\n'+
        '\t</div>\n'+
        '<script type="text/javascript">\n'+
        '\tvar countdown = document.getElementById("countdown");\n'+
        '\tvar total = new Date('+ dataFinal.getTime() +').getTime() - new Date().getTime();\n'+
        '\tsetInterval(() => { \n'+
        '\t\ttotal-=1000;\n'+

        '\t\tvar days = Math.floor(total / (24*60*60*1000)) ;\n'+

        '\t\tvar hours = Math.floor( ( total - (days*24*60*60*1000) ) / (60*60*1000));\n'+

        '\t\tvar minutes = Math.floor( ( total - (days*24*60*60*1000) - (hours*60*60*1000) ) / (60*1000));\n'+

        '\t\tvar seconds = Math.floor( ( total - (days*24*60*60*1000) - (hours*60*60*1000) - (minutes*60*1000) ) / (1000));\n'+

        '\t\tcountdown.innerHTML = (days < 10 ? "0"+days : days) +" : "+(hours < 10 ? "0"+hours : hours)+" : "+(minutes < 10 ? "0"+minutes : minutes)+" : "+(seconds < 10 ? "0"+seconds : seconds);\n'+

        '\t }, 1000);\n'+
        '</script>\n'+
        '</div>';

        return (

            <div className="Code container">
                <h2>Code</h2>
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