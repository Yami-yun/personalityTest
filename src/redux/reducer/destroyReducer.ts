
import { 
    MOVE_TEST_PAGE,
    RESULT_TXT_ADD,
} from '../action/types';



const initDestroyData = {
    page: 0,
    result: [],

}


export default function(state=initDestroyData, action:any) {
    
    switch(action.type){
        
        case MOVE_TEST_PAGE:
            console.log(state);
            return {...state, page: state.page+1};

        case RESULT_TXT_ADD:

            return {...state, result: [...state.result, action.payload]}
        default:
            return state;
    }

};