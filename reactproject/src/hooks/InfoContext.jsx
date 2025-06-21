import {createContext} from "react"
export const InfoContext=createContext()
export const InfoProvider=({children})=>{
    const info={name:'Thenu',age:19,dep:'ECE'}
    return(
        <InfoContext.Provider value={info}>
                   {children}
               </InfoContext.Provider>
    )
}
