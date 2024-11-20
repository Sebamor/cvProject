import {createContext} from "react";
import useResumeUI from "../hooks/resumeHooks.js";

const UIContext = createContext();

const UIProvider = ({children}) => {
    const {hideUI, handleHideUI} = useResumeUI();
    
    // // Function to hide UI when user is ready to save resume
    // const [hideUI, setHideUI] = useState('show');
    // function handleHideUI() {
    //     hideUI === 'none' ? setHideUI('show') : setHideUI('none')
    // }

    return (
        <UIContext.Provider value={{hideUI, handleHideUI}}>
            {children}
        </UIContext.Provider>
    )
}

export {UIContext, UIProvider};