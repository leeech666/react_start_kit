import {SNACKBAR_CHANGE} from "./actionTypes";

const initState = {
    open: true,
    vertical: 'top',
    horizontal: 'center',
    msg: 'first message',
    seconds: 1000
}

export default function (state = initState, action){
    switch(action.type){
		/*
        case SNACKBAR_CHANGE:
            return {
                ...Object.assign(initState, action.snackbar)
            };
		*/
		case SNACKBAR_CHANGE:{
            return {
               ...state,open:action.open,msg:action.msg,seconds:action.seconds
            };
		}
        default:{
            return state
		}
    }
}