import { RECEIVE_ENTRIE, ADD_ENTRY } from '../actions'

function entries(state={}, action){
    switch(action.type){
        case RECEIVE_ENTRIE: 
            return {
                ...state,
                ...action.entries
            }
        case ADD_ENTRY:
            return {
                ...state,
                ...action.entry
            }
        default: 
            return state
    }
}

export default entries