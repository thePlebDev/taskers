import {useState,useEffect} from 'react'

/**
 * used to determine if a DOM node has been clicked or not clicked
 * 
 * @param {useRef object} node 
 * @param {Function} setState 
 * @param {String} title 
 * 
 * @returns click
 * @returns {Boolean} returns a boolean to determined if clicked or not
 * 
 * @returns setClicked
 * @returns {Function} Returns a function used to change the clicked value
 */

const useClickDetection =(node,title,setState)=>{
    const [clicked,setClicked] = useState(false)

    useEffect(()=>{

        const handleClick = e =>{
            if(node.current.contains(e.target)){
                setClicked(true)
                if(setState){
                    setState(title)
                }
                
            }else{
                setClicked(false)
            }
        }
        document.addEventListener("mousedown",handleClick)

        return()=>{
            document.removeEventListener("mousedown",handleClick);
        }

    },[setState,title,node])


    return{
        clicked,
        setClicked
    }

}


export default useClickDetection