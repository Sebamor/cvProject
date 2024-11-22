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
        expHeader: 'black',
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
        expHeader: '28px',
    })
    function handleFontChange(section) {
        const newFonts = {...fontSize};
        newFonts[section] = prompt('Enter font size', '16');
        newFonts[section] = `${newFonts[section]}px`;
        setFontSize(newFonts);
    }

    // Function to add items in experience component
    const [jobTitle, setJobTitle] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [jobDate, setJobDate] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [items, setItems] = useState([{id:'0', title:'Big Business', description:'Import and export',role:'CEO',location:'Somewhere, USA',date:'2012-2023'}]);
    const [nextId, setNextId] = useState(0);

    function handleJobTitleChange(e) {
        setJobTitle(e.target.value);
    }
    function handleJobDescriptionChange(e) {
        setJobDescription(e.target.value);  
    }
    function handleJobRoleChange(e) {
        setJobRole(e.target.value);  
    }
    function handleJobLocationChange(e) {
        setJobLocation(e.target.value);  
    }
    function handleJobDateChange(e) {
        setJobDate(e.target.value);  
    }


    function handleAddItem() {
        if(jobTitle.trim() !== '' && jobDescription.trim() !== '' && jobRole.trim() !== '' && jobDate.trim() !== '' && jobLocation.trim() !== '') {
            const newItem = {
                id: nextId,
                title: jobTitle,
                description: jobDescription,
                role: jobRole,
                location: jobLocation,
                date: jobDate,
            }

            setItems([...items, newItem]);
            setNextId(nextId + 1);
            setJobTitle('');
            setJobDescription('');
            setJobRole('');
            setJobLocation('');
            setJobDate('');
        }
    }

    function handleDeleteItem(id) {
        setItems(items.filter(item => item.id !== id));
    }
    

    return {
        jobTitle,
        setJobTitle,
        jobDescription,
        setJobDescription,
        jobRole,
        jobDate,
        jobLocation,
        items,
        setItems,
        nextId,
        setNextId,
        handleJobTitleChange,
        handleJobDescriptionChange,
        handleAddItem,
        handleDeleteItem,
        handleJobDateChange,
        handleJobLocationChange,
        handleJobRoleChange,
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