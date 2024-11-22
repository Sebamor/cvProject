import useResumeUI from '../hooks/resumeHooks.js';
import { useContext } from 'react';
import { UIContext } from '../components/UIContext.jsx';
import useState from 'react';

function AddItems() {
    const {hideUI} = useContext(UIContext);
    const {setItems, jobTitle, jobDescription, items, handleJobTitleChange, handleJobDescriptionChange, handleAddItem, handleDeleteItem, jobRole, jobDate, jobLocation, handleJobDateChange, handleJobLocationChange, handleJobRoleChange} = useResumeUI();

    return(
        <div style={{width:'100%'}}>
            <h2 style={{display:hideUI}}>Add Jobs</h2>
            
            <div id="jobInputContainer1" style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-end',
                gap:'30px'
            }}>
                <input type="text" value={jobTitle} onChange={handleJobTitleChange} placeholder='Company' style={{
                    borderRadius:'5px',
                    textAlign:'center',
                    display:hideUI,
                }}/>
                <input type="text" value={jobRole} onChange={handleJobRoleChange} placeholder='Job Role' style={{
                    borderRadius:'5px',
                    textAlign:'center',
                    display:hideUI,
                }}/>
                <input type="text" value={jobLocation} onChange={handleJobLocationChange} placeholder='Job location' style={{
                    borderRadius:'5px',
                    textAlign:'center',
                    display:hideUI,
                }}/>
                <input type="text" value={jobDate} onChange={handleJobDateChange} placeholder='Dates worked' style={{
                    borderRadius:'5px',
                    textAlign:'center',
                    display:hideUI,
                }}/>
            </div>
            <div id="jobInputContainer2" style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'flex-end',
                paddingTop:'10px',
                paddingBottom:'10px',
            }}>
                <textarea name="jobDescriptionInput" id="jobDescriptionInput" value={jobDescription} onChange={handleJobDescriptionChange} placeholder='Job Description' style={{
                    textAlign:'center',
                    borderRadius:'5px',
                    lineHeight:'2em',
                    width:'300px',
                    display:hideUI,
                }}></textarea>
            </div>
            <div id="addItemButton">
                <button onClick={handleAddItem} style={{display:hideUI}}>Add Job</button>
            </div>
            <ul>
                {items.map(item => (
                    <li key={item.id} style={{
                        listStyle:'none',
                    }}>
                        <div id="titleAndLocation" style={{display:'flex', justifyContent:'space-between'}}>
                            <p><strong>{item.title}</strong></p>
                            <p><strong>{item.location}</strong></p>
                        </div>
                        <div id="roleAndDate" style={{display:'flex', justifyContent:'space-between'}}>
                            <p>{item.role}</p>
                            <p>{item.date}</p>
                        </div>
                        <div id="jobDescription" style={{display:'flex', justifyContent:'flex-start', padding:'10px'}}>
                            <p>{item.description}</p>
                        </div>
                        <button onClick={() => handleDeleteItem(item.id)} style={{display:hideUI}}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AddItems;