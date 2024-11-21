import { useContext } from 'react';
import  useResumeUI from '../hooks/resumeHooks.js';
import { UIContext } from '../components/UIContext.jsx';

function Experience() {
    const {itemColor, handleColorChange, fontSize, handleFontChange} = useResumeUI();
    const {hideUI} = useContext(UIContext);


    return (
        <div id="experienceContainer" style={{
            background: 'white',
            color:'black', 
            width:'100vw', 
            display:'flex', 
            flexDirection:'column', 
            alignItems:'center', 
            justifyContent:'center',
        }}>


            <div id="experienceHeader" style={{
                borderBottom:'2px solid black',
                minWidth:'80vw',
            }}>
                <div id="expHeaderContainer" style={{
                    paddingLeft:'30px',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'flex-end'
                }}>
                    <h2 style={{color:itemColor.expHeader, fontSize:fontSize.expHeader}}>Experience</h2>

                    <div className='expButtonContainer' style={{
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'flex-end',
                        gap:'20px',
                    }}>
                        <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('expHeader')}>Font Size</button>

                        <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                            <div className='titleColorSelectorContainer'>
                                <div className="titleColorSelectorContainer">
                                    <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                                    <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('expHeader', e)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="experienceListContainer">
                test
            </div>
        </div>
    )
}

export default Experience;