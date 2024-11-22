import useResumeUI from '../hooks/resumeHooks.js';
import { useContext } from 'react';
import { UIContext } from '../components/UIContext.jsx';

function Header() {
    const {itemColor, handleColorChange, fontSize, handleFontChange} = useResumeUI();
    const {hideUI, user} = useContext(UIContext);

    return (
        <div id='headerContainer' style={{
            background: 'white',
            color:'black', 
            width:'100vw', 
            display:'flex', 
            flexDirection:'column', 
            alignItems:'center', 
            justifyContent:'center',
        }}>


            <div id="titleContainer" style={{
                display: 'flex', 
                flexDirection:'row',
                justifyContent:'space-around', 
                alignItems:'center',
                width:'100vw'
            }}>

                <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('header')}>Font Size</button>

                <h1 id="resumeTitle" contentEditable='true' style={{color:itemColor.header, fontSize:fontSize.header}}>{user.name} Resume</h1>

                <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                    <div className='titleColorSelectorContainer'>
                        <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('header', e)}/>
                        <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                    </div>
                </div>

            </div>


            <div id="headerInfoContainer" style={{
                borderTop:'4px solid black', 
                wordWrap:'normal', 
                minWidth:'80vw', 
                display:'flex', 
                justifyContent:'space-around', 
                alignItems:'center', 
                paddingTop:'10px', 
                paddingBottom:'10px'
            }}>

                <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('hInfo')}>Font Size</button>

                <div id="headerInfo" style={{
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    color:itemColor.hInfo,
                    fontSize: fontSize.hInfo,
                }}>
                    <div id="address" contentEditable='true'>{user.address}</div>
                    <div id="phone"  contentEditable='true'>{user.phone}</div>
                    <div id="email"  contentEditable='true'>{user.email}</div>
                </div>

                <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                    <div className='titleColorSelectorContainer'>
                        <div className="titleColorSelectorContainer">
                                <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('hInfo', e)}/>
                                <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                        </div>
                    </div>
                </div>

            </div>


            <div id="summaryContainer" style={{
                borderTop: '2px solid black', 
                wordWrap:'normal', 
                minWidth:'80vw', 
                display:'flex', 
                justifyContent:'space-around', 
                alignItems:'center', 
                paddingTop:'10px', 
                paddingBottom:'10px',
            }}>

                <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('summary')}>Font Size</button>

                <div id="summaryInfo" contentEditable='true' style={{
                    color:itemColor.summary, 
                    fontSize:fontSize.summary,
                    width:'80%',
                    textAlign:'center',
                }}>
                    {user.summary}
                </div>

                <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                    <div className="titleColorSelectorContainer">
                            <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('summary', e)}/>
                            <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                    </div>
                </div>
                
            </div>

            
        </div>
    )
}

export default Header