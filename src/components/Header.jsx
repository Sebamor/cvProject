import useResumeUI from '../hooks/resumeHooks.js';
import { useContext } from 'react';
import { UIContext } from '../components/UIContext.jsx';

function Header() {
    const {itemColor, handleColorChange} = useResumeUI();
    const {hideUI,handleHideUI, user} = useContext(UIContext);

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
                <button id='hideUIButton' className='uiElement' style={{display:hideUI}} onClick={handleHideUI}>Hide UI</button>
                <h1 id="resumeTitle" contentEditable='true' style={{color:itemColor.header}}>{user.name} Resume</h1>
                <div id="titleColorSelectorHideContainer" className='uiElement' style={{
                    alignSelf:'flex-end',
                    display:hideUI,
                    justifySelf:'center'
                }}>
                    <div id="titleColorSelectorContainer" style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
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
                justifyContent:'center', 
                alignItems:'center', 
                paddingTop:'10px', 
                paddingBottom:'10px'
            }}>

                <div id="headerInfo" style={{
                    display:'flex', 
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignItems:'center',
                    color:itemColor.hInfo,
                }}>
                    <div id="address" contentEditable='true'>{user.address}</div>
                    <div id="phone"  contentEditable='true'>{user.phone}</div>
                    <div id="email"  contentEditable='true'>{user.email}</div>
                </div>

                <div id="titleColorSelectorContainer" style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                }}>
                        <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('hInfo', e)}/>
                        <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                </div>

            </div>


            <div id="summaryContainer" style={{
                borderTop: '2px solid black', 
                wordWrap:'normal', 
                minWidth:'80vw', 
                display:'flex', 
                justifyContent:'center', 
                alignItems:'center', 
                paddingTop:'10px', 
                paddingBottom:'10px',
            }}>

                <div id="summaryInfo" contentEditable='true' style={{color: itemColor.summary}}>
                    {user.summary}
                </div>

                <div id="titleColorSelectorContainer" style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                }}>
                        <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('summary', e)}/>
                        <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                </div>
                
            </div>

            
        </div>
    )
}

export default Header