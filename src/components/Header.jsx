import {useState} from 'react';
import useResumeUI from '../hooks/resumeHooks.js';
function Header() {
    const {user, hideUI, itemColor, handleColorChange, handleHideUI} = useResumeUI();

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
                <h1 id="resumeTitle" contentEditable='true' style={{color:itemColor}}>{user.name} Resume</h1>
                <div id="titleColorSelector" className='uiElement' style={{
                    alignSelf:'flex-end',
                    margin:'0', 
                    padding:'0',
                    display:hideUI
                }}>
                    <input type="color" id="colorSelector" name="colorSelector" onChange={handleColorChange}/>
                    <label htmlFor="colorSelector" style={{fontWeight:'800'}}>Choose Color</label>
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
                    alignItems:'center'
                }}>
                    <div id="address" contentEditable='true'>{user.address}</div>
                    <div id="phone"  contentEditable='true'>{user.phone}</div>
                    <div id="email"  contentEditable='true'>{user.email}</div>
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
                paddingBottom:'10px'
            }}>
                <div id="summaryInfo" contentEditable='true'>
                    {user.summary}
                </div>
            </div>

            
        </div>
    )
}

export default Header