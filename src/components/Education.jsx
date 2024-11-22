import { useContext } from 'react';
import  useResumeUI from '../hooks/resumeHooks.js';
import { UIContext } from '../components/UIContext.jsx';

function Education() {
    const {
        itemColor, 
        handleColorChange, 
        fontSize, 
        handleFontChange,
        handleDeleteEItem,
        handleAddEducationItem,
        handleCollegeInfoChange,
        handleDegreeInfoChange,
        collegeInfo,
        educationItem,
        degreeInfo,
    } = useResumeUI();
    const {hideUI} = useContext(UIContext);

    return (
        <div id='educationContainer' style={{
            background: 'white',
            color:'black', 
            width:'100vw', 
            display:'flex', 
            flexDirection:'column', 
            alignItems:'center', 
            justifyContent:'center',
        }}>
            

            <div style={{width:'80vw'}}>
                <div id="experienceHeader" style={{
                    borderBottom:'2px solid black',
                    minWidth:'80vw',
                }}>
                    <div id="educationHeaderContainer" style={{
                        paddingLeft:'30px',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'flex-end'
                    }}>
                        <h2 style={{color:itemColor.expHeader, fontSize:fontSize.expHeader}}>Education</h2>
                        <div className='educationButtonContainer' style={{
                            display:'flex',
                            flexDirection:'row',
                            alignItems:'flex-end',
                            gap:'20px',
                        }}>
                            <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('expHeader')}>Font Size</button>
                            <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                                <div className='titleColorSelectorContainer'>
                                    <div className="titleColorSelectorContainer">
                                        <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('expHeader', e)}/>
                                        <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addEducationUiContainer" style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    width:'100%',
                    gap:'10px',
                }}>
                    <h2 style={{display:hideUI}}>Add College/Degree Information</h2>
                    <div id="CollegeInputContainer" style={{display:'flex', gap:'10px'}}>
                            <input type="text" value={collegeInfo} onChange={handleCollegeInfoChange} placeholder='Enter College' style={{
                            borderRadius:'5px',
                            textAlign:'center',
                            display:hideUI,
                            }}/>
                            <input type="text" value={degreeInfo} onChange={handleDegreeInfoChange} placeholder='Enter Degree' style={{
                            borderRadius:'5px',
                            textAlign:'center',
                            display:hideUI,
                            }}/>
                    </div>
                    <div id="addCollegeItemButton" style={{display:hideUI}}>
                        <button onClick={handleAddEducationItem} style={{display:hideUI,}}>Add Job</button>
                    </div>
                </div>
                <div id="educationFontColor" style={{display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'20px'}}>
                    <button className='hideUIButton' style={{display:hideUI}} onClick={() => handleFontChange('hInfo')}>Font Size</button>
                    <div className="titleColorSelectorHideContainer" style={{display:hideUI}}>
                    <div className='titleColorSelectorContainer'>
                        <input type="color" id="colorSelector" name="colorSelector" onChange={(e) => handleColorChange('hInfo', e)}/>
                        <label htmlFor="colorSelector" style={{fontWeight:'800', display:'block '}}>Choose Color</label>
                    </div>
                    </div>
                </div>


                <ul style={{listStyle:'none',}}>
                    {educationItem.map(item => (
                        <li key='item.id' style={{}}>
                            <p style={{color:itemColor.hInfo, fontSize:fontSize.hInfo}}>{item.college}</p>
                            <p style={{color:itemColor.hInfo, fontSize:fontSize.hInfo}}>{item.degree}</p>
                            <button style={{display:hideUI,}} onClick={() => handleDeleteEItem(item.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Education;