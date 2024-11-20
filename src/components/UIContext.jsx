import {createContext} from "react";
import useResumeUI from "../hooks/resumeHooks.js";

const UIContext = createContext();

const UIProvider = ({children}) => {
    const {hideUI, handleHideUI, user, handleUserInfo} = useResumeUI();
    

    return (
        <UIContext.Provider value={{hideUI, handleHideUI, handleUserInfo, user}}>
            {children}
        </UIContext.Provider>
    )
}

export {UIContext, UIProvider};