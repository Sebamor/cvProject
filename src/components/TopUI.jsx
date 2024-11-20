import useResumeUI from '../hooks/resumeHooks.js';
import { useContext } from 'react';
import { UIContext } from '../components/UIContext.jsx';

function TopUI() {
    const {itemColor, handleColorChange} = useResumeUI();
    const {hideUI, handleHideUI} = useContext(UIContext);

    return (
        <div id="UIContainer" style={{
                display: 'flex', 
                flexDirection:'row',
                justifyContent:'center', 
                alignItems:'center',
                width:'100vw',
                background: 'white',
            }}>
                <button id='hideUIButton' className='uiElement' style={{display:hideUI}} onClick={handleHideUI}>Hide UI</button>
            </div>
    )
}

export default TopUI;