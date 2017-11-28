import React, { Component } from 'react';

class Options extends Component {

    render () {

        const {options} = this.props;

         // TIMER

         const date = new Date( options.date  );
         const hours = ( options.hours || 23 );
         const minutes = ( options.minutes || 59 );
         const seconds = ( options.seconds || 59 );
 
         // OUTSIDE DIV STYLE
 
         const textAlign = options.textAlign || 'center';        
         // const paddingOutsideVertical = (options.paddingOutsideVertical || 10) + 'px';
         // const paddingOutsideHorizontal = (options.paddingOutsideHorizontal || 10) + 'px';
         const transparencyOutside = (options.transparencyOutside || "ff");
         const backgroundColorOutside =  (options.backgroundColorOutside || "#dd1122");
 
         // TEXT STYLE
 
         const fontSize = (options.fontSize || 1.5);
         // const paddingInsideVertical = (options.paddingInsideVertical || 10) + 'px';
         // const paddingInsideHorizontal = (options.paddingInsideHorizontal || 10) + 'px';
         const transparencyInside = (options.transparencyInside || "ff");
         const backgroundColorInside =  (options.backgroundColorInside || "#dd5566");
         const fontFamily = ( options.fontFamily || 'Helvetica');
         const fontWeight = ( options.fontWeight || 300 );
         const fontColor = ( options.fontColor || "#111111");

        return (
            <div className="Options container">
                <h2>Options</h2>
                <hr />

                <div className="flex">
                    <div className="flex-1">

                        <h3>Font</h3>

                        <h4>Text Align</h4>
                        <select
                            onChange={ (ev) => this.props.onChange('textAlign',ev.target.value) }
                            value={textAlign} >
                           { ['left','center','right'].map((text) => (
                                <option key={text} value={text}>{text}</option>
                            )) }
                        </select>

                        <h4>Font Size</h4>
                        {'0.5'}<input 
                            type="range" 
                            value={fontSize} 
                            onChange={ (ev) => 
                                this.props.onChange('fontSize', ev.target.value)} 
                            min={0.5}
                            max={5.5}
                        />{'5'}

                        <h4>Font Family</h4>
                        <select
                            onChange={ (ev) => this.props.onChange('fontFamily',ev.target.value) }
                            value={fontFamily} >
                           { [
                                'Helvetica',
                                'Arial',
                                'sans-serif',
                                'serif',
                                'Georgia',
                                'Times New Roman',
                                'Palatino',
                                'Impact',
                                'Tahoma',
                                'Geneva',
                                'monospace'
                             ].map((text) => (
                                <option key={text} value={text}>{text}</option>
                            )) }
                        </select>  

                        <h4>Font Weight</h4>
                        <select
                            onChange={ (ev) => this.props.onChange('fontWeight',ev.target.value) }
                            value={fontWeight} >
                           { [
                                '100',
                                '200',
                                '400',
                                '600',
                                '700'
                             ].map((text) => (
                                <option key={text} value={text}>{text}</option>
                            )) }
                        </select>

                    </div>
                    <div className="flex-1">

                        <h3>Count</h3>   

                        <span>Day: </span>
                        <input 
                            type="date" 
                            value={ ( date.getFullYear() + '-' + (date.getMonth()+1) +'-'+ date.getDate() ) }
                            onChange={ (ev) => this.props.onChange('date',ev.target.value) } />
                        <br /><br />  

                        <span>Hours: </span>
                        <input 
                            type="number" 
                            min="0"
                            max="23"
                            step="1"
                            value={hours}
                            onChange={ (ev) => this.props.onChange('hours',ev.target.value) } />  
                        <br /><br />  

                        <span>Minutes: </span>
                        <input 
                            type="number" 
                            min="0"
                            max="59"
                            step="1"
                            value={minutes}
                            onChange={ (ev) => this.props.onChange('minutes',ev.target.value) } />  
                        <br /> <br />      

                        <span>Seconds: </span>
                        <input 
                            type="number" 
                            min="0"
                            max="59"
                            step="1"
                            value={seconds}
                            onChange={ (ev) => this.props.onChange('seconds',ev.target.value) } />  
                        <br /><br /> 

                    </div>
                    <div className="flex-1">

                        <h3>Colors</h3> 

                        <span>Background Color: </span>
                        <input 
                            type="color" 
                            value={backgroundColorOutside}
                            onChange={ (ev) => this.props.onChange('backgroundColorOutside',ev.target.value) } />  
                        <br /><br />  

                        <span>Background Transparency: </span>
                        <select 
                            value={transparencyOutside}
                            onChange={ (ev) => this.props.onChange('transparencyOutside',ev.target.value) } >
                            {[
                                '00',
                                '11',
                                '33',
                                '55',
                                'aa',
                                'ff'
                            ].map((v,key) => (<option key={key} value={v}>{v}</option>))}
                        </select>  
                        <br /><br />  

                        <span>Inside Color: </span>
                        <input 
                            type="color" 
                            value={backgroundColorInside}
                            onChange={ (ev) => this.props.onChange('backgroundColorInside',ev.target.value) } />  
                        <br /><br />  

                        <span>Inside Transparency: </span>
                        <select 
                            value={transparencyInside}
                            onChange={ (ev) => this.props.onChange('transparencyInside',ev.target.value) } >
                            {[
                                '00',
                                '11',
                                '33',
                                '55',
                                'aa',
                                'ff'
                            ].map((v,key) => (<option key={key} value={v}>{v}</option>))}
                        </select>  
                        <br /><br />  

                        <span>Font Color: </span>
                        <input 
                            type="color" 
                            value={fontColor}
                            onChange={ (ev) => this.props.onChange('fontColor',ev.target.value) } />  
                        <br /><br /> 

                    </div>
                </div>

                <hr />

                <div className="flex">
                    <div className="flex-1">

                        <h3>Padding</h3>

                        <span>Padding Outside Horizontal: </span>
                        <input 
                            type="range" 
                            min={0}
                            max={50}
                            value={options.paddingOutsideHorizontal}
                            onChange={ (ev) => this.props.onChange('paddingOutsideHorizontal',ev.target.value) } />  
                        <br /><br />  

                        <span>Padding Outside Vertical: </span>
                        <input 
                            type="range" 
                            min={0}
                            max={50}
                            value={options.paddingOutsideVertical}
                            onChange={ (ev) => this.props.onChange('paddingOutsideVertical',ev.target.value) } />  
                        <br /><br /> 

                        <span>Padding Inside Horizontal: </span>
                        <input 
                            type="range" 
                            min={0}
                            max={50}
                            value={options.paddingInsideHorizontal}
                            onChange={ (ev) => this.props.onChange('paddingInsideHorizontal',ev.target.value) } />  
                        <br /><br />  

                        <span>Padding Inside Vertical: </span>
                        <input 
                            type="range" 
                            min={0}
                            max={50}
                            value={options.paddingInsideVertical}
                            onChange={ (ev) => this.props.onChange('paddingInsideVertical',ev.target.value) } />  
                        <br /><br /> 

                    </div>
                </div>
            </div>
        );

    }

}

export default Options;