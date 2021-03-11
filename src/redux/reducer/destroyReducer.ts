
import { 
    MOVE_TEST_PAGE,
    RESULT_TXT_ADD,
    INIT_TEST
} from '../action/types';



const initDestroyData = {
    page: 1,
    result: [],

}


export default function(state=initDestroyData, action:any) {
    
    switch(action.type){
        case INIT_TEST:
            return {...state, page: 1, result: []};
        
        case MOVE_TEST_PAGE:
            console.log(state);
            return {...state, page: state.page+1};

        case RESULT_TXT_ADD:

            return {...state, result: [...state.result, action.payload]}
        default:
            return state;
    }

};