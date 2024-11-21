import {useState} from 'react';

const useResumeUI = () => {
    // Function to set user info
    const [user, setUser] = useState({
        name: 'John Smith', 
        email: 'johnSmith@email.com', 
        phone: '(000)000-0000', 
        address:'111 Somewhere Drive, Big Town, ZX 11111', 
        summary:'I like to make cool stuff' 
    });
    function handleUserInfo() {
        const name = prompt('Enter your name', 'John Smith');
        const email = prompt('Enter your email', 'johnSmith@email.com');
        const phone = prompt('Enter your phone number', '(000)000-0000');
        const address = prompt('Enter your address', 'address');
        const summary = prompt('Enter your resume summary', 'resume summary');
        setUser({name:name, email:email, phone:phone, address:address, summary:summary})
    }

    // Function to hide UI when user is ready to save resume
    const [hideUI, setHideUI] = useState('show');
    function handleHideUI() {
        hideUI === 'none' ? setHideUI('show') : setHideUI('none')
    }

    // Function to change font colors
    const [itemColor, setItemColor] = useState({
        header: 'black',
        summary: 'black',
        hInfo: 'black',
    });
    function handleColorChange(section, e) {
        const newColors = {...itemColor};
        newColors[section] = e.target.value;
        setItemColor(newColors);
    }

    // Function to change font
    const [fontSize, setFontSize] = useState({
        header: '52px',
        summary: '16px',
        hInfo: '16px',
    })
    function handleFontChange(section) {
        const newFonts = {...fontSize};
        newFonts[section] = prompt('Enter font size', '16');
        newFonts[section] = `${newFonts[section]}px`;
        setFontSize(newFonts);
    }

    return {
        user,
        setUser,
        hideUI,
        setHideUI,
        itemColor,
        setItemColor,
        fontSize,
        setFontSize,
        handleFontChange,
        handleHideUI,
        handleColorChange,
        handleUserInfo,
    }
}

export default useResumeUI;