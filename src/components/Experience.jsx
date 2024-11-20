import { useContext } from 'react';
import  useResumeUI from '../hooks/resumeHooks.js';

function Experience() {
    const {itemColor, handleColorChange} = useResumeUI();
    // const {user, handleHideUI, hideUI} = useContext(UIContext);


    return (
        <div id="experienceContainer">

        </div>
    )
}

export default Experience;