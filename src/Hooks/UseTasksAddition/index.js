import {useState,useEffect} from 'react';



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