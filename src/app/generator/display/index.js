import React, { Component } from 'react';

class Display extends Component {

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
        const fontFamily = ( options.fontFamily || 'Helvetica');
        const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
        const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
        const backgroundColorInside =  (options.backgroundColorInside || "#d56");
        
        const wrapperStyle = {
            textAlign,
            padding: paddingOutsideVertical + ' '+ paddingOutsideHorizontal,
            background: backgroundColorOutside
        };

        const style = {
            fontSize,
            padding: paddingInsideVertical +' '+ paddingInsideHorizontal,
            background: backgroundColorInside,
            fontFamily: fontFamily
        };

        return (

            <div className="Display">
                <div className="countdown-timer">
                <div style={wrapperStyle}>
                    <span style={style}>
                        {
                            startDay ? ( 
                                startDay > 9 ? startDay : '0'+startDay 
                            ): ''
                        }
                        {
                            startHours ? ' : '+ ( 
                                startHours > 9 ? startHours : '0'+startHours 
                            ): ''
                        }
                        {
                            startMinutes ? ' : '+ ( 
                                startMinutes > 9 ? startMinutes : '0'+startMinutes 
                            ): ''
                        }
                        {
                            startSeconds ? ' : '+ ( 
                                startSeconds > 9 ? startSeconds : '0'+startSeconds 
                            ): ''
                        }
                        {
                            startMilliseconds ? ' : '+ ( 
                                startMilliseconds > 9 ? startMilliseconds : '0'+startMilliseconds 
                            ): ''
                        }
                    </span>
                </div>  
                </div>
            </div>

        );

    }

}

export default Display;