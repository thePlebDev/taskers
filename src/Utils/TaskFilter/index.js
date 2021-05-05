

const utilFunc = (name,setState,state,status)=>{
    setState(state.filter(item=> item.name !== name))
}



export default utilFunc