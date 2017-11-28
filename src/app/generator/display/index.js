import React, { Component } from 'react';

class Display extends Component {

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
        const transparencyOutside = ( options.transparencyOutside || "ff" );
        const backgroundColorOutside =  (options.backgroundColorOutside || "#dd1122")+transparencyOutside;        

        // TEXT STYLE

        const fontSize = (options.fontSize || 1.5)+'em';
        const fontFamily = ( options.fontFamily || 'Helvetica');
        const fontWeight = ( options.fontWeight || 300 );
        const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
        const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
        const transparencyInside = ( options.transparencyInside || "ff" );
        const backgroundColorInside =  (options.backgroundColorInside || "#dd5566") + transparencyInside;
        const fontColor = ( options.fontColor || "#111111");
        
        const wrapperStyle = {
            textAlign,
            padding: paddingOutsideVertical + ' '+ paddingOutsideHorizontal,
            background: backgroundColorOutside
        };

        const style = {
            fontSize,
            fontWeight,
            color: fontColor,
            padding: paddingInsideVertical +' '+ paddingInsideHorizontal,
            background: backgroundColorInside,
            fontFamily: fontFamily
        };

        const dataFinal = new Date( date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes, seconds );
        const today = new Date();

        const timeDiff = dataFinal.getTime() - today.getTime();

        const displayDay = Math.floor( timeDiff / (24*60*60*1000) );

        const displayHours = Math.floor( ( timeDiff - ( displayDay * 24*60*60*1000 ) ) / (60*60*1000) );

        const displayMinutes = Math.floor( ( timeDiff - ( displayDay * 24*60*60*1000 ) - ( displayHours * 60*60*1000 ) ) / (60*1000) );

        const displaySeconds = Math.floor( ( timeDiff - ( displayDay * 24*60*60*1000 ) - ( displayHours * 60*60*1000 ) - ( displayMinutes * 60*1000 ) ) / (1000) );

        return (

            <div className="Display">
                <h3>{'\tData Final: '+ dataFinal.getDate()+'/'+(dataFinal.getMonth()+1)+'/'+dataFinal.getFullYear()+' '+dataFinal.getHours()+':'+dataFinal.getMinutes()+':'+dataFinal.getSeconds() }</h3>
                <div className="countdown-timer">
                <div style={wrapperStyle}>
                    <span style={style}>
                        {
                            ( 
                                displayDay > 9 ? displayDay : '0'+displayDay 
                            )
                        }
                        {
                            ' : '+ ( 
                                displayHours > 9 ? displayHours : '0'+displayHours 
                            )
                        }
                        {
                            ' : '+ ( 
                                displayMinutes > 9 ? displayMinutes : '0'+displayMinutes 
                            )
                        }
                        {
                            ' : '+ ( 
                                displaySeconds > 9 ? displaySeconds : '0'+displaySeconds 
                            )
                        }
                    </span>
                </div>  
                </div>
            </div>

        );

    }

}

export default Display;