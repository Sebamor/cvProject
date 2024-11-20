import { useContext } from 'react';
import { UIContext } from '../components/UIContext.jsx';

function TopUI() {
    const {hideUI, handleHideUI, user, handleUserInfo} = useContext(UIContext);

    return (
        <div id="UIContainer" style={{
                display: 'flex', 
                flexDirection:'row',
                justifyContent:'center', 
                alignItems:'center',
                width:'100vw',
                background: 'white',
                gap:'20px',
                paddingTop:'10px',
            }}>
                <button id='hideUIButton' className='uiElement' style={{display:hideUI}} onClick={handleHideUI}>Hide UI</button>
                <button id="userInfoButton" className='uiElement' style={{display:hideUI}} onClick={handleUserInfo}>Enter Info</button>
            </div>
    )
}

export default TopUI;