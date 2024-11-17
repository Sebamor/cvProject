import {useState} from 'react';

function Header() {
const [user, setUser] = useState({name: 'John Smith', email: 'johnSmith@email.com', phone: '(000)000-0000', address:'111 Somewhere Drive, Big Town, ZX 11111', summary:'I like to make cool stuff' });
    return (
        <div id='headerContainer' style={{background: 'white', color:'black', width:'100vw', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',}}>
            <h1 id="resumeTitle" contentEditable='true' style={{color:'navy'}}>{user.name} Resume</h1>
            <div id="headerInfoContainer" style={{borderTop:'4px solid black', wordWrap:'normal', minWidth:'80vw', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'10px', paddingBottom:'10px'}}>
                <div id="headerInfo" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div id="address" contentEditable='true'>{user.address}</div>
                    <div id="phone"  contentEditable='true'>{user.phone}</div>
                    <div id="email"  contentEditable='true'>{user.email}</div>
                </div>
            </div>
            <div id="summaryContainer" style={{borderTop: '2px solid black', wordWrap:'normal', minWidth:'80vw', display:'flex', justifyContent:'center', alignItems:'center', paddingTop:'10px', paddingBottom:'10px'}}>
                <div id="summaryInfo" contentEditable='true'>
                    {user.summary}
                </div>
            </div>
        </div>
    )
}

export default Header