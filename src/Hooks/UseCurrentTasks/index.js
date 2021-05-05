import {useState,useEffect} from 'react';


const useCurrentTasks =(tasksArray)=>{
    const [state,setState] = useState([])

    useEffect(()=>{
        if(tasksArray.name){
            setState([...state,tasksArray])

        }
        
    },[tasksArray])

    return{
        state,
        setState
    }
}


export default useCurrentTasks