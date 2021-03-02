
import { 
    MOVE_TEST_PAGE
} from '../action/types';



const initDestroyData = {
    page: 0,

}


export default function(state=initDestroyData, action:any) {
    
    switch(action.type){
        
        case MOVE_TEST_PAGE:
            console.log(state);
            return {...state, page: state.page+1};

        default:
            return state;
    }

};