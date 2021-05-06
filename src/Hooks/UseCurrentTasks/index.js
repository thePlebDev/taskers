import {useState,useEffect} from 'react';


/**
 * used to trigger a reset and update the current tasks array 
 * 
 * @param {Array} tasksArray 
 * 
 * @returns state
 * @returns {Array} returns an array value to be used by other components
 * 
 * @returns setState
 * @returns {Function} Returns a function used to change the state value
 */

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