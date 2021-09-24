const initialState = [];

const updateCompletedTaskList = (state=initialState,action)=>{
    switch(action.type){
        case "UPDATE COMPLETED TASK":
            return [...state,action.payload];
        default:
            return state;
    }
}

export default updateCompletedTaskList;