import {useState} from 'react';

const useResumeUI = () => {
    // TODO build user to change resume when prompt shows up
    const [user, setUser] = useState({
        name: 'John Smith', 
        email: 'johnSmith@email.com', 
        phone: '(000)000-0000', 
        address:'111 Somewhere Drive, Big Town, ZX 11111', 
        summary:'I like to make cool stuff' 
    });

    // Function to hide UI when user is ready to save resume
    const [hideUI, setHideUI] = useState('show');
    function handleHideUI() {
        hideUI === 'none' ? setHideUI('show') : setHideUI('none')
    }

    // Function to change font colors
    const [itemColor, setItemColor] = useState('black');
    function handleColorChange(e) {
        setItemColor(e.target.value)
    }

    return {
        user,
        setUser,
        hideUI,
        setHideUI,
        itemColor,
        setItemColor,
        handleHideUI,
        handleColorChange
    }
}

export default useResumeUI;