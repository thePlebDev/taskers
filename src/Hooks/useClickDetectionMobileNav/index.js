import {useEffect} from 'react'


/**
 * Function used to determine the where a click occured on the mobile Nav
 * 
 * @param {useRef Object} node 
 * @param {Function} setNav 
 * 
 * @returns {undefined}
 */
const useClickDetectionMobile =(node,setNav)=>{

    useEffect(()=>{
        const handleClick =(e)=>{
            if(node.current.contains(e.target)){
    
            }else{
                setNav(false)
            }
        }

        document.addEventListener("mousedown",handleClick);

        return ()=>{
                document.removeEventListener("mousedown",handleClick);
        }
    },[node,setNav])
}

export default useClickDetectionMobile