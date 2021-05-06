import {useState} from 'react';

/**
 * used as a custom hook to handle the controlled value of the inputs and to create new tasks
 * 
 * @param {Object} defaultState 
 * 
 * @returns state
 * @returns {Object} returns a object representing the controlled values of the inputs
 * 
 * @returns tasks
 * @returns {Object} returns a object representing the current tasks
 * 
 * @returns setState
 * @returns {Function} returns a function used to manipulate the state object
 * 
 * @returns setTasks
 * @returns {Function} returns a function used to manipulate the tasks object
 * 
 * @returns handleSubmit
 * @returns {Function} returns a function used to add to the tasks object
 * 
 * @returns handleChange
 * @returns {Function} returns a function used to manipulate the controlled input values
 */


const useTasks =(defaultState)=>{

    const [tasks,setTasks] = useState({})
    const [state,setState] = useState(defaultState)

    const handleChange=(e)=>{
        const {value,name} = e.target;

        setState({...state,[name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setTasks({...tasks,name:state.title})
    }


    return{
        tasks,
        state,
        setState,
        setTasks,
        handleChange,
        handleSubmit

    }
}


export default useTasks