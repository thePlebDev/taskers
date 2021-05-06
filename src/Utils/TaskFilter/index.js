
/**
 * used to filter out unwanted tasks by their name
 * 
 * @param {string} name 
 * @param {Function} setState 
 * @param {Array} state 
 * @param {string} status 
 * 
 * @returns {undefined}
 * 
 */

const utilFunc = (name,setState,state,status)=>{
    setState(state.filter(item=> item.name !== name))
}



export default utilFunc